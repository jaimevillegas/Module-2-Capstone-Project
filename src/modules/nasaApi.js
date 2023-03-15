import endpoints from './endpoints.js';

const getImages = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  return `Error: Request failed with status code ${response.status}`;
};

const filterData = async (items = []) => {
  const filtered = [];

  await Promise.all(
    items.map(async ({ href, data = [] }) => {
      const images = {};
      const imageUrls = await getImages(href);
      imageUrls.forEach((url) => {
        if (url.match(/thumb/)) {
          images.thumb = url;
        } else if (url.match(/orig/)) {
          images.main = url;
        } else if (url.match(/medium/)) {
          images.main = url;
        }
      });
      filtered.push({
        title: data[0].title,
        nasa_id: data[0].nasa_id,
        description: data[0].description,
        photographer: data[0].photographer || 'Unknown',
        thumb: images.thumb,
        image: images.main,
      });
    })
  );

  return filtered;
};

const getData = async (params, configs) => {
  const query = endpoints.search({
    title: 'mars',
    media_type: 'image',
    page_size: 20,
    ...params,
  });
  try {
    const response = await fetch(query, { ...configs });
    if (response.ok) {
      const data = await response.json();
      return await filterData(data.collection.items);
    }
    throw new Error(`Request failed with status code: ${response.status}`);
  } catch (error) {
    throw new Error('Please check your connection');
  }
};

export default getData;
