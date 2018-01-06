var recipes = {Cake: 'Milk'};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  
  return Object.delete()
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}