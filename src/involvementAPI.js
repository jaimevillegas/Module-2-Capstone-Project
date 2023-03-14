const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appID = 'lYZ9ZtHh76XKuPy6HAWO'
const itemID = 'test_item_2'

// Retrieve data from the API
const retreiveData = async () => {
  const response = await fetch(`${url}apps/${appID}/comments?item_id=${itemID}`);
  const data = await response.json();

  return data;
};

console.log(retreiveData());

export default {
  retreiveData
}
