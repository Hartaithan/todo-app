import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../models/StoreModel';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
