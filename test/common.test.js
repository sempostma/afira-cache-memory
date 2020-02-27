const createMemoryCacheStore = require('../dist/index').default

test('common usecase', async () => {
    const store = createMemoryCacheStore()

    await store.set('key', 'value')
    expect(await store.get('key')).toBe('value')
    expect(await store.keys()).toStrictEqual(['key'])
    await store.remove('key')
    expect(await store.get('key')).toBe(undefined)
    expect(await store.keys()).toStrictEqual([])
    await store.set('key', 'value')
    await store.set('key2', 'value2')
    await store.purge()
    expect(await store.get('key')).toBe(undefined)
    expect(await store.keys()).toStrictEqual([])

    await store.destroy()
})
