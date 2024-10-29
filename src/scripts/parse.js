let parsedResult = new Array([]);

function parseObject(obj){
  parsedResult = [];
  parseObjectLogic(obj);
  return parsedResult;
}

function parseObjectLogic(obj = {}) {
  Object.keys(obj).map((key) => {
    if (typeof obj[key] == 'object') {
      parseObjectLogic(obj[key]);
    } else parsedResult.push(`${key}: ${obj[key]}`);
  });
  return parsedResult;
}

export default parseObject;