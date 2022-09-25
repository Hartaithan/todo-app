import React from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { colors } from '../constants/colors';
import useActions from '../hooks/useActions';
import { ITodoItem } from '../models/TodoModel';
import { global } from '../styles/global';
import Checkbox from './Checkbox';

export interface ITodoItemProps {
  item: ITodoItem;
}

const ITEM_HEIGHT = 50;
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;

const TodoItem = ({ item }: ITodoItemProps) => {
  const { toggleTodoAction, deleteTodoAction } = useActions();
  const x = useSharedValue(0);
  const height = useSharedValue(ITEM_HEIGHT);
  const margin = useSharedValue(10);
  const opacity = useSharedValue(1);

  const handleChange = () => {
    toggleTodoAction(item.id);
  };

  const handleDelete = () => {
    deleteTodoAction(item.id);
  };

  const onGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onActive: event => {
        x.value = event.translationX;
      },
      onEnd: () => {
        const shouldBeDismissed = x.value < TRANSLATE_X_THRESHOLD;
        if (shouldBeDismissed) {
          x.value = withTiming(-SCREEN_WIDTH);
          height.value = withTiming(0);
          margin.value = withTiming(0);
          opacity.value = withTiming(0, undefined, isFinished => {
            if (isFinished) {
              runOnJS(handleDelete)();
            }
          });
        } else {
          x.value = withTiming(0);
        }
      },
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }],
    height: height.value,
    opacity: opacity.value,
  }));

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[styles.item, animatedStyles]}>
        <Checkbox value={item.complete} onChange={() => handleChange()} />
        <Text
          style={[global.text, styles.title, item.complete && styles.checked]}>
          {item.title}
        </Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  item: {
    minHeight: ITEM_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.dark[5],
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    color: colors.gray[0],
    marginLeft: 8,
  },
  checked: { textDecorationLine: 'line-through', textDecorationStyle: 'solid' },
});

export default TodoItem;
