var recipes = {Cake: 'Milk'};

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = object;
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object = Object.assign({key: value});
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({},object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return;
}