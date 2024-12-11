import { is } from '@onesy/utils';

export type TOnesyHashTableValue = any;

export default class OnesyHashTable {
  public value: Array<[string?, TOnesyHashTableValue?]> = [];
  public length = 0;
  // ASCII character code range 0-127
  public limit = 127;

  public constructor(
    limit?: number
  ) {
    if (is('number', limit) && limit > 0) this.limit = limit;

    this.value = new Array(this.limit);
  }

  // Override for a custom hashing method
  public hash(property: string): number {
    let value = 0;

    if (is('string', property)) {
      for (let i = 0; i < property.length; i++) value += property[i].charCodeAt(0);
    }

    return value % this.limit;
  }

  public get(property: string): TOnesyHashTableValue {
    const index = this.hash(property);

    const values = this.value[index] || [];

    return values.find(item => item[0] === property)?.[1];
  }

  public set(property: string, value: TOnesyHashTableValue): OnesyHashTable {
    const index = this.hash(property);

    if (!this.value[index]) this.value[index] = [];

    const values = this.value[index];

    values.push([property, value]);

    this.length++;

    return this;
  }

  public remove(property: string): boolean {
    const index = this.hash(property);

    const values: Array<[string, TOnesyHashTableValue]> = this.value[index];

    if (values) {
      const valueIndex = values.findIndex(item => item[0] === property);

      if (valueIndex > -1) {
        values.splice(valueIndex, 1);

        this.length--;

        return true;
      }
    }

    return false;
  }

  public clear(): OnesyHashTable {
    this.value = new Array(this.limit);

    this.length = 0;

    return this;
  }
}
