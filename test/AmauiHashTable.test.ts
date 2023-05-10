/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import AmauiHashTable from '../src';

group('AmauiHashTable', () => {

  to('AmauiHashTable', async () => {
    const value = new AmauiHashTable();

    value.set('a', 14);

    const valueBrowsers = await evaluate((window: any) => {
      const value = new window.AmauiHashTable();

      value.set('a', 14);

      return [value.get('a'), value.length];
    });
    const valueNode = [value.get('a'), value.length];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([14, 1]));
  });

  group('amauiHashTable', async () => {

    to('length', async () => {
      const value = new AmauiHashTable();

      value.set('a', 14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.AmauiHashTable();

        value.set('a', 14);

        return [value.length];
      });
      const valueNode = [value.length];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1]));
    });

    to('hash', async () => {
      const value = new AmauiHashTable();

      value.set('a', 14).set('a1', 114);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.AmauiHashTable();

        value.set('a', 14).set('a1', 114);

        return [...Object.keys(value.value)];
      });
      const valueNode = [...Object.keys(value.value)];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql(['19', '97']));
    });

    to('get', async () => {
      const value = new AmauiHashTable();

      value.set('a', 14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.AmauiHashTable();

        value.set('a', 14);

        return [value.get('a')];
      });
      const valueNode = [value.get('a')];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([14]));
    });

    to('set', async () => {
      const value = new AmauiHashTable();

      value.set('a', 14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.AmauiHashTable();

        value.set('a', 14);

        return [value.get('a')];
      });
      const valueNode = [value.get('a')];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([14]));
    });

    to('remove', async () => {
      const value = new AmauiHashTable();

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.AmauiHashTable();

        return [value.set('a', 14).get('a'), value.remove('a'), value.get('a')];
      });
      const valueNode = [value.set('a', 14).get('a'), value.remove('a'), value.get('a')];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([14, true, undefined]));
    });

    to('clear', async () => {
      const value = new AmauiHashTable();

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.AmauiHashTable();

        return [value.set('a', 14).get('a'), value.clear().get('a'), value.length];
      });
      const valueNode = [value.set('a', 14).get('a'), value.clear().get('a'), value.length];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([14, undefined, 0]));
    });

  });

});
