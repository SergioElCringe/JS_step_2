export default pl => {
  const { method = 'GET', url, parametres = {}, obj = {} } = pl;
  const base = { method, url, obj };
  switch (method) {
    case 'POST': {
      base.data = obj;
      break;
    }
    case 'PUT': {
      base.data = obj;
      break;
    }
    case 'DELETED': {
      base.data = obj;
      break;
    }

    default: {
      base.params = parametres;
    }
  }

  return base;
}