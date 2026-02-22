export type Awaitable<T> = Promise<T> | T;

export async function interopDefault<T>(
  m: Awaitable<T & { default?: T }>,
): Promise<T> {
  const resolved = await m;
  return (resolved as { default?: T }).default ?? (resolved as T);
}
