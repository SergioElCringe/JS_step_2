export default d => {
  const { data } = d;
  if (!data) {
    throw new Error();
  } else {
    return data;
  }
};