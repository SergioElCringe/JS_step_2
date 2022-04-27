export default pl => {
  const { method = 'GET', url, parametres = {} } = pl;
  const base = { method, url };
  switch (method) {
    case 'POST': {
      const { data = {}, params = {} } = parametres;
      base.data = data;
      base.params = params;
      console.log(base)
      break;
    }

    default: {
      //GET
      // { id: '123', filter: 'up', amount: 10 } === params
      base.params = parametres;
    }
  }

  return base;
}


//GET
// lohost:8080/catalog/
// lohost:8080/catalog/?id=123&filter=up&amount=10
// url params

//POST
// lohost/cart + {...} - bodyReq
// lohost/cart/?something=123 + {...} - bodyReq