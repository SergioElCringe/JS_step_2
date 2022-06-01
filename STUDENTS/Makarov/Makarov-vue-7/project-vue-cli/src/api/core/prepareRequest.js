export default pl => {
    const { method = 'GET', url, data } = pl;
    const base = { method, url };
    switch (method) {
      case 'PUT':
      case 'POST': {
        base.data = data;
        break;
      }
    }
    return base;
  }
  