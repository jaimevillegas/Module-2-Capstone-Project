const createElement = (tagName = 'div', options = {}) => {
  const element = document.createElement(tagName);
  Object.entries(options).forEach(([name, value]) => {
    if (['class', 'id', 'style'].includes(name)) {
      element.setAttribute(name, value);
    } else {
      element[name] = value;
    }
  });
  return element;
};

const $ = (query) => {
  const result = document.querySelectorAll(query);
  return result.length > 1 ? result : result[0];
};

const trauncateText = (text = '', length = 155) => `${text.slice(0, length).trim()}....`;

export { createElement, $, trauncateText };
