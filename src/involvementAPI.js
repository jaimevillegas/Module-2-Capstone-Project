const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appID = 'lYZ9ZtHh76XKuPy6HAWO';
// const itemID = 'test_item_2';

// Retrieve data from the API
const retreiveData = async (itemID) => {
  const response = await fetch(`${url}apps/${appID}/comments?item_id=${itemID}`);
  const data = await response.json();
  return data;
};

const submitComment = async (itemID, username, commentDescription) => {
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

const getLikes = async () => {
  // It returns an array of objects with all item ID's. We have to implement a filtering function
  const response = await fetch(`${url}apps/${appID}/likes`);
  const data = await response.json();
  return data;
};

// const filterLikes = (itemID) => {
//   const likesObj = getLikes();
// FILTER THE ARRAY OF OBJECTS
// likesObj.filter()
// };

// FUNCTION TO ADD A LIKE

export {
  retreiveData, submitComment, getLikes,
};
