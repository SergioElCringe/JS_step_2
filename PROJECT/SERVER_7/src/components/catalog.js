module.exports = {
  findItem(catalog, id) {
    return catalog.find(el => el.id === id);
  },
}