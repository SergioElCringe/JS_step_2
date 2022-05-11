module.exports = {
  findItem(catalog, id) {
    return catalog.find(el => el.id === id);
  },
  filter(catalog, param) {
    // const parametres = Object.keys(params);
    return !param ? catalog : catalog.filter(el => el[param]);
  },
}