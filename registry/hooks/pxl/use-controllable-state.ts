import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  useCallback,
  useEffect,
  useInsertionEffect,
  useRef,
  useState,
} from "react";

type ChangeHandler<T> = (state: T) => void;
type SetStateFn<T> = Dispatch<SetStateAction<T>>;

function isFunction(value: unknown): value is (...args: any[]) => any {
  return typeof value === "function";
}

export function useControllableState<T>({
  prop,
  defaultProp,
  onChange = () => {},
}: {
  prop?: T | undefined;
  defaultProp: T;
  onChange?: ChangeHandler<T>;
  caller?: string;
}): [T, SetStateFn<T>] {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] =
    useUncontrolledState({
      defaultProp,
      onChange,
    });
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;

  const setValue = useCallback<SetStateFn<T>>(
    (nextValue) => {
      if (isControlled) {
        const value = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value !== prop) {
          onChangeRef.current?.(value);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef],
  );

  return [value, setValue];
}

function useUncontrolledState<T>({
  defaultProp,
  onChange,
}: {
  defaultProp: T;
  onChange?: ChangeHandler<T>;
  caller?: string;
}): [
  Value: T,
  setValue: Dispatch<SetStateAction<T>>,
  OnChangeRef: RefObject<ChangeHandler<T> | undefined>,
] {
  const [value, setValue] = useState(defaultProp);
  const prevValueRef = useRef(value);

  const onChangeRef = useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);

  return [value, setValue, onChangeRef];
}
