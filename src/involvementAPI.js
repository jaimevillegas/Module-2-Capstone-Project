const url =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appID = 'lYZ9ZtHh76XKuPy6HAWO';
const itemID = 'test_item_2';

// Retrieve data from the API
const retreiveData = async () => {
  const response = await fetch(
    `${url}apps/${appID}/comments?item_id=${itemID}`
  );
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
      item_id: itemID,
      username,
      comment: commentDescription,
    }),
  });
  const data = await response.json();
  return data;
};

const addLike = async (itemID) => {
  try {
    const response = await fetch(`${url}apps/${appID}/likes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: itemID }),
    });
    if (response.ok) {
      return { success: true };
    } else {
      console.log(`Request failed with status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error('Connection Error: Please check your connection');
  }
  return { success: false };
};

const getLikes = async (itemID) => {
  // It returns an array of objects with all item ID's. We have to implement a filtering function
  const response = await fetch(`${url}apps/${appID}/likes`);
  const data = await response.json();
  return itemID ? data.find((like) => like.item_id === itemID) : data;
};

// FUNCTION TO ADD A LIKE

export { retreiveData, submitComment, getLikes, addLike };
