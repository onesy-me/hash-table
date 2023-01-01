
</br >
</br >

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img src='utils/images/logo.svg' alt='amaui logo' />
  </a>
</p>

<h1 align='center'>amaui Hash table</h1>

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
  // yarn
  yarn add @amaui/hash-table

  // npm
  npm install @amaui/hash-table
```

### Use cases
- Indexing data
- Caching
- Storage for data, for efficient quering
- Storing relationships between data
- etc.

### Use

```javascript
  import AmauiHashTable from '@amaui/hash-table';

  // Make a new hash table instance
  const amauiHashTable = new AmauiHashTable();

  // Add values
  amauiHashTable.set('a', 14).set('a1', 114);

  amauiHashTable.get('a');
  // 14

  amauiHashTable.get('a14');
  // undefined

  // Remove
  amauiHashTable.remove('a');
  // true

  amauiHashTable.get('a');
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
