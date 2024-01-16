import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';
import { useCallback, useMemo } from 'react';

// const debounce = function (fn, delay) {
//   let timeoutId = null;
//   return function (...args) {
//     if (timeoutId) {
//       clearTimeout();
//     }
//     timeoutId = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// };

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  // 定义防抖处理函数
  const handleDebouncedClick1 = useCallback(() => {
    dispatch(decreaseItemQuantity(pizzaId));
  }, [dispatch, pizzaId]);

  // 使用防抖处理点击事件
  const handleClickDebounced1 = useMemo(() => {
    const debounce = (fn, delay) => {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          fn(...args);
        }, delay);
      };
    };
    return debounce(handleDebouncedClick1, 1000); // 设置防抖时间间隔，单位是毫秒
  }, [handleDebouncedClick1]);

  const handleDebouncedClick2 = useCallback(() => {
    dispatch(increaseItemQuantity(pizzaId));
  }, [dispatch, pizzaId]);

  // 使用防抖处理点击事件
  const handleClickDebounced2 = useMemo(() => {
    const debounce = (fn, delay) => {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          fn(...args);
        }, delay);
      };
    };
    return debounce(handleDebouncedClick2, 1000); // 设置防抖时间间隔，单位是毫秒
  }, [handleDebouncedClick2]);

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleClickDebounced1}>
        -
      </Button>
      <span className="text-sm font-bold">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(handleClickDebounced2)}>
        +
      </Button>
    </div>
  );
}
