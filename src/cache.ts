class SimpleCache<T> {
    private cache: Map<string, { value: T; expires: number }>;
    private ttl: number;  // Time to live in milliseconds

    constructor(ttlSeconds: number) {
        this.cache = new Map();
        this.ttl = ttlSeconds * 1000;  // Convert seconds to milliseconds
    }

    set(id: string, value: T): void {
        const expires = Date.now() + this.ttl;
        this.cache.set(id, { value, expires });
    }

    get(id: string): T | null {
        const item = this.cache.get(id);
        if (item) {
            if (item.expires > Date.now()) {
                return item.value;
            } else {
                // If the item is expired, delete it from the cache
                this.cache.delete(id);
            }
        }
        return null;
    }

    cleanup(): void {
        const now = Date.now();
        for (const [id, item] of this.cache.entries()) {
            if (item.expires <= now) {
                this.cache.delete(id);
            }
        }
    }
}

export { SimpleCache };
