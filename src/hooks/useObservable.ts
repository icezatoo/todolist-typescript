import { useState, useEffect } from 'react';

export type ResetStreamSource<T> = (source$: Observable<T>) => void;

export interface Observable<T> {
  subscribe: (
    listener: (value: T) => void,
    error?: (err: string) => void,
  ) => {
    unsubscribe: () => void;
  };
}

export function useObservable<T>(
  observable$: Observable<T>,
): [T | undefined, ResetStreamSource<T>];
export function useObservable<T>(
  observable$: Observable<T>,
  initialValue: T,
): [T, ResetStreamSource<T>];

export function useObservable<T>(
  observable$: Observable<T>,
  initialValue?: T,
): [T | undefined, ResetStreamSource<T>] {
  const [source$, setObservable] = useState<Observable<T>>(observable$);
  const [value, setValue] = useState<T | undefined>(initialValue);
  const reportError = (err: any) =>
    console.error(`error: ${JSON.stringify(err)}`);

  useEffect(() => {
    if (source$) {
      const s = source$.subscribe(setValue, reportError);
      return () => {
        s.unsubscribe();
      };
    }
  }, [source$]);

  return [value, setObservable];
}
