import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';
import { useCallback } from 'react';
import debounce from 'lodash.debounce';

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  const debouncedDecrease = useCallback(
    debounce(() => dispatch(decreaseItemQuantity(pizzaId)), 300),
    [], // will be created only once initially
  );

  const debouncedIncrease = useCallback(
    debounce(() => dispatch(increaseItemQuantity(pizzaId)), 300),
    [], // will be created only once initially
  );

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={debouncedDecrease}>
        -
      </Button>
      <span className="text-sm font-bold">{currentQuantity}</span>
      <Button type="round" onClick={debouncedIncrease}>
        +
      </Button>
    </div>
  );
}
