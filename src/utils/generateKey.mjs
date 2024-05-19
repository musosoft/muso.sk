// src/utils/generateKey.mjs
export const generateKey = () => {
  let key = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 8;
  for (let i = 0; i < length; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return key;
};
