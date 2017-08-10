export default class Store<T> {
    private value;
    private channel;
    constructor(initialValue: T);
    get(): T;
    broadcast(): void;
    subscribe(fn: () => void): () => void;
}
