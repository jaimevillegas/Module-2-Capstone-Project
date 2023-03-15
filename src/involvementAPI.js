const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appID = 'lYZ9ZtHh76XKuPy6HAWO';
const itemID = 'test_item_2';

// Retrieve data from the API
const retreiveData = async () => {
  const response = await fetch(`${url}apps/${appID}/comments?item_id=${itemID}`);
  const data = await response.json();
  return data;
};

const submitComment = async (username, commentDescription) => {
  const response = await fetch(`${url}apps/${appID}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'item_id': itemID,
      'username': username,
      'comment': commentDescription,
    }),
  });
  const data = await response.json();
  return data;
};

export {
  retreiveData,
  submitComment,
};
