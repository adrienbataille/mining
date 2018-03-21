// Jest in VSCode doesn't kown Object.values, so we are adding here a polyfill for it
if (!Object.values) {
  Object.values = obj => Object.keys(obj).map(key => obj[key]);
}
