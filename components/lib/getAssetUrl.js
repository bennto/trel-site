const url = process.env.directusUrl;

export function getAssetURL(id) {
  if (!id) return null;

  return `${url}assets/${id}`;
}
