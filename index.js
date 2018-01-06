var recipes = {Cake: 'Milk'};

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object(object);
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObj = Object(object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}