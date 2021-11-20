export function assert_eq<T>(a: T, b: unknown): asserts b is T {
	return assert(a === b);
}
