
</br>
</br>

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img src='utils/images/logo.svg' alt='onesy logo' />
  </a>
</p>

<h1 align='center'>onesy Hash table</h1>

<p align='center'>
  Hash table
</p>

<br />

<h3 align='center'>
  <sub>MIT license&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Production ready&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>UMD 1.5kb gzipped&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>100% test cov&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Browser and Nodejs</sub>
</h3>

<p align='center'>
  <sub>Very simple code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Modern code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Junior friendly&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Typescript&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Made with :yellow_heart:</sub>
</p>

<br />

## Getting started

### Add

```sh
yarn add @onesy/hash-table
```

### Use cases
- Indexing data
- Caching
- Storage for data, for efficient quering
- Storing relationships between data
- etc.

### Use

```javascript
  import OnesyHashTable from '@onesy/hash-table';

  // Make a new hash table instance
  const onesyHashTable = new OnesyHashTable();

  // Add values
  onesyHashTable.set('a', 14).set('a1', 114);

  onesyHashTable.get('a');
  // 14

  onesyHashTable.get('a14');
  // undefined

  // Remove
  onesyHashTable.remove('a');
  // true

  onesyHashTable.get('a');
  // undefined
```

### Dev

Install

```sh
yarn
```

Test

```sh
yarn test
```

### Prod

Build

```sh
yarn build
```
