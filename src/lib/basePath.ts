// next/image's `basePath` handling only rewrites next/link and internal
// navigation automatically — asset `src` strings need the prefix by hand.
// See https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  return `${BASE_PATH}${path}`;
}
