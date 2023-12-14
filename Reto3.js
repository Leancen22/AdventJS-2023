function findNaughtyStep(original, modified) {
  let largo = 0
  if(original.length > modified.length){
    largo = original.length
  } else {
    largo = modified.length
  }
  for(let i = 0; i < largo; i ++) {
    if(original[i] != modified[i]) {
      return original.length > modified.length ? original[i] : modified[i]
    }
  }
  return '';
}
