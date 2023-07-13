/* eslint-disable no-console */
export const warn = (...args: any[]) => {
  console.log('\u001B[1;33m', ...args);
};

export const debug = (...args: any[]) => {
  console.log('\u001B[1;36m', ...args);
};

export const error = (...args: any[]) => {
  console.log('\u001B[1;31m', ...args);
};

export const info = (...args: any[]) => {
  console.log('\u001B[1;32m', ...args);
};

export const api = (...args: any[]) => {
  console.log('\u001B[1;36m', ...args);
};
