
export const baseUrl = import.meta.env.BASE_URL;

export function url(path: string) {
  if (baseUrl === "/") {
    return `${baseUrl}${path}`;
  }

  return [baseUrl, path].join("/");
}