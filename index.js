var recipes = {Cake: 'Milk'};

function updateObjectWithKeyAndValue(object, key, value){
  return {{},obj,{[key]: value}};
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObj = {};
  newObj = 
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}