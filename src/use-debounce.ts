import { useEffect } from "react";

export function useDebounce<T>(
  value: T,
  functionToDebounce: () => void,
  delay: number,
) {
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      functionToDebounce();
    }, delay);
    return () => clearTimeout(timeOutId);
  }, [value]);
}
