function maxDistance(movements) {
  let distance = 0;
  let maximizar_aster = 0;
  for(let i = 0; i <= movements.length; i ++) {
    if(movements[i] == '>') {
      distance ++;
    } else if(movements[i] == '<') {
      distance --;
    } 
    if(movements[i] == '*') {
      maximizar_aster ++;
    }
  }
  if(distance > 0) {
    distance += maximizar_aster;
  } else {
    distance -= maximizar_aster;
  }
  return Math.abs(distance)
}
