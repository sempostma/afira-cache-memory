interface Store {
    get: (key: string) => Promise<any>
    keys: () => Promise<string[]>
    set: (key: string, value: any) => Promise<void>
    purge: () => Promise<void>
    remove: (key: string) => Promise<void>
    destroy: () => Promise<void>
}

export default (): Store => {
    let cache: { [key: string]: any } = {}

    const get = async (key: string) => cache[key]
    const keys = async () => Object.keys(cache)
    const set = async (key: string, value: any) => cache[key] = value
    const purge = async () => { cache = {} }
    const remove = async (key: string) => { delete cache[key] }
    const destroy = async () => purge()

    return {
        get,
        keys,
        set,
        purge,
        remove,
        destroy
    }
}

