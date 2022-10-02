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
import { ITodoItem } from '../models/todoModel';
import { global } from '../styles/global';
import Checkbox from './Checkbox';

export interface ITodoItemProps {
  item: ITodoItem;
}

const ITEM_HEIGHT = 50;
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;

const TodoItem: React.FC<ITodoItemProps> = props => {
  const { item } = props;
  const { toggleTodoAction, deleteTodoAction } = useActions();
  const x = useSharedValue(0);
  const margin = useSharedValue(10);
  const opacityAndScale = useSharedValue(1);

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
          margin.value = withTiming(0);
          opacityAndScale.value = withTiming(0, undefined, isFinished => {
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
    transform: [{ translateX: x.value }, { scaleY: opacityAndScale.value }],
    opacity: opacityAndScale.value,
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
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  title: {
    color: colors.gray[0],
    marginLeft: 8,
  },
  checked: { textDecorationLine: 'line-through', textDecorationStyle: 'solid' },
});

export default TodoItem;
