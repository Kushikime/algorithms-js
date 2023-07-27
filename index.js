/**
 * @return {Function}
 */

let createHelloWorld = function () {
  return function (...args) {
    return console.log(createHelloWorld.name);
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
createHelloWorld()();
