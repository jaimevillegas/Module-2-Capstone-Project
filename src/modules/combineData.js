const combineData = (items = [], likes = []) => items.map((item) => ({
  ...item,
  likes: likes.find((like) => like.item_id === item.nasa_id)?.likes || 0,
}));

export default combineData;
