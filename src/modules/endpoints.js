const base = 'https://images-api.nasa.gov/';
const endpoints = {
  search: (params) =>
    `${base}search?` +
    Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&'),
  asset: (id) => `asset/${id}`,
  meta: (id) => `metadata/${id}`,
  caption: (id) => `captions/${id}`,
  album: (name) => `album/${name}`,
};

export default endpoints;
