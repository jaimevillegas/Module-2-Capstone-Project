const key = 'xGpVC7kINw7Z2ziPkXsQMT8hxQvisQKYhApYeCzb';

const get = async (url, configs) => {
  try {
    const response = await fetch(url, { ...configs });
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Request failed with status code: ${response.status}`);
  } catch (error) {
    throw new Error('Please check your connection');
  }
};

export default { get };
