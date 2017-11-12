// object defines a 'recipes' object
var recipes = {}

// Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the
// orignal key value pairs and the new key value pair:

// Object updateObjectWithKeyAndValue(object, key, value) it does not modify the orignal object,
// but rather returns a clone with the new data:
function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({}, obj)
  return delete newObj.key
}

function destructivelyDeleteFromObjectByKey(obj, key){
  return delete obj.key
}

function destructivelyDeleteFromObjectByKey(obj, key){

}
