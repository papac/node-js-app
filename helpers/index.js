/**
 * Check if the parsed 
 * element is object
 * 
 * @param {*} element 
 */
const isObject = (element) => {
  return typeof element === 'object';
}

/**
 * Check if the parsed 
 * element is string
 * 
 * @param {*} element 
 */
const isString = (element) => {
  return typeof element === 'string';
}

/**
 * Check if the parsed 
 * element is function
 * 
 * @param {*} element 
 */
const isFunction = (element) => {
  return typeof element === 'function';
}

/**
 * Check if the parsed 
 * element is array
 * 
 * @param {*} element 
 */
const isArray = (element) => {
  return element instanceof Array;
}

/**
 * Check if the parsed 
 * element is undefined
 * 
 * @param {*} element 
 */
const isUndefined = (element) => {
  return typeof element === 'undefined';
}

module.exports = {
  // Put here you application helper
  isArray,
  isString,
  isObject,
  isFunction,
  isUndefined
};
