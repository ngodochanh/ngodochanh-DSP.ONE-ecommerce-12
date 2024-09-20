export const extractIdFromUrl = (url: string) => {
  const regex = /-([a-zA-Z0-9]+)\.html$/;
  const match = url.match(regex);

  if (match) {
    return match[1];
  } else {
    return null;
  }
};
