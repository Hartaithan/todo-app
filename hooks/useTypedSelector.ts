import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../models/storeModel';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
