# afira-cache-memory

## Installation

```bash 
npm install --save afira-cache-memory
```

## Usage

```javascript
const createMemoryCacheStore = require('../dist/index').default

const store = createMemoryCacheStore()

store.set('key', 'value')
    .then(() => store.get('key'))
    .then(console.log)
```

or es6

```javascript
import createMemoryCacheStore from '../dist/index'

const store = createMemoryCacheStore()

store.set('key', 'value')
    .then(() => store.get('key'))
    .then(console.log)
```

## API

```typescript
get: (key: string) => Promise<any>
keys: () => Promise<string[]>
set: (key: string, value: any) => Promise<void>
purge: () => Promise<void>
remove: (key: string) => Promise<void>
destroy: () => Promise<void>
```