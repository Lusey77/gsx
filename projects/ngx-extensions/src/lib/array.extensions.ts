import { ArgumentNullException } from "../../../ngx-core/src/lib/exception";
import { isNullOrUndefined } from "../../../ngx-core/src/lib/util";

type Func<T, R> = (_: T) => R;

declare global {
  interface Array<T> {
    // filter
    where(this: Array<T>, predicate: Func<T, boolean>): Array<T>;

    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
    // remove(this: Array<T>, toRemove: ((_: T) => boolean) | T): void;
  }
}

export class ArrayExtensions {
  public static init() {
    Object.defineProperty(Array.prototype, 'where', {
      enumerable: false,
      value: function<T>(this: Array<T>, predicate: Func<T, boolean>): Array<T> {
        if (isNullOrUndefined(this)) {
          throw new ArgumentNullException("this");
        }

        if (isNullOrUndefined(predicate)) {
          throw new ArgumentNullException("predicate")
        }

        return this.filter(predicate);
      }
    });

    Object.defineProperty(Array.prototype, 'typeOf', {
      enumerable: false,
      value: function<T>(this: Array<T>, type: any): Array<T> {
        if (isNullOrUndefined(this)) {
          throw new ArgumentNullException("this");
        }

        if (isNullOrUndefined(type)) {
          throw new ArgumentNullException("type")
        }



        return this.filter(predicate);
      }
    });
  }
}
