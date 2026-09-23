
export type IsPlainObject<T> =
  T extends Array<unknown>
    ? false
    : T extends (...args: Array<unknown>) => unknown
      ? false
      : T extends Date
        ? false
        : T extends object
          ? T extends null
            ? false
            : true
          : false;
export type RemoveUndefined<T> = T extends undefined ? never : T;
export type DeepPartial<T> =
  IsPlainObject<T> extends true
    ? { [P in keyof T]?: DeepPartial<RemoveUndefined<T[P]>> }
    : T extends Array<infer U>
      ? Array<DeepPartial<U>>
      : T;