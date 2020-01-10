import { ODataOrderByType } from "./odata-orderby";
import { ODataFormatType } from "./odata-format";

export class ODataBuilder<T> {
  public instance: T;
  public propertiesToSelect: keyof T | (keyof T)[] | '*' = null;


  public constructor(type: new(...args: any) => T, ...args: any) {
    this.instance = new type(...args);
  }

  // Does not support qualified schema name selection
  public select(properties?: keyof T | (keyof T)[] | '*'): ODataBuilder<T> {
    if (this.propertiesToSelect != null) {
      throw new Error("Can't use select twice");
    }

    if (properties) {
      this.propertiesToSelect = properties;
    } else {
      this.propertiesToSelect = Object.keys(this.instance) as (keyof T)[];
    }

    return this;
  }

  // Well shit.....just read the spec for this one and not quite sure how to implement it
  public compute(): ODataBuilder<T> {
    return this;
  }

  // The fact we can filter and select expanded properties is great but god what a pain to do here
  public expand(properties?: keyof T | (keyof T)[]): ODataBuilder<T> {
    return this;
  }

  // Dear God help us all
  public filter(): ODataBuilder<T> {
    return this;
  }

  public search(freeText: string): ODataBuilder<T> {
    return this;
  }

  // Apparently this can be false for what reasons I do not know
  public count(count: boolean = true): ODataBuilder<T> {
    return this;
  }

  public orderBy(properties: keyof T | (keyof T) | ODataOrderByType<T> | ODataOrderByType<T>[]): ODataBuilder<T> {
    return this;
  }

  public skip(num: number): ODataBuilder<T> {
    return this;
  }

  public top(num: number): ODataBuilder<T> {
    return this;
  }

  // Could not find the standard for what is acceptable here
  public format(type: ODataFormatType = 'json'): ODataBuilder<T> {
    return this;
  }
}

