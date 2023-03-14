import './style.css';
// import retreiveData from './involvementAPI.js';
import displayComments from './showComments.js';


const refreshButton = document.getElementById('refresh');

refreshButton.addEventListener('click', (e) => {
  e.preventDefault();
  displayComments();
});
