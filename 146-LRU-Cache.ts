
class Node {
    key: number;
    value: number;
    prev: Node | null = null;
    next: Node | null = null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
    }
}

class LRUCache {
    private capacity: number;
    private cache: Map<number, Node>;

    private head: Node;
    private tail: Node;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map<number, Node>();

        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    private remove(node: Node): void {
        const prev = node.prev!;
        const next = node.next!;

        prev.next = next;
        next.prev = prev;
    }

    private insert(node: Node): void {
        const last = this.tail.prev!;

        last.next = node;
        node.prev = last;

        node.next = this.tail;
        this.tail.prev = node;
    }

    get(key: number): number {
        const node = this.cache.get(key);

        if (!node) {
            return -1;
        }

        this.remove(node);
        this.insert(node);

        return node.value;
    }

    put(key: number, value: number): void {
        const existingNode = this.cache.get(key);

        if (existingNode) {
            this.remove(existingNode);
        }

        const newNode = new Node(key, value);

        this.cache.set(key, newNode);
        this.insert(newNode);

        if (this.cache.size > this.capacity) {
            const lruNode = this.head.next!;

            this.remove(lruNode);
            this.cache.delete(lruNode.key);
        }
    }
}
