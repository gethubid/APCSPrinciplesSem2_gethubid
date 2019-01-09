function sort(array){
  var minIndex;
  var temp;
  for(var i = 0; i < array.length; i++){
    minIndex = i;
    for(var j = i + 1; j < array.length; j++){
       if(array[j] < array[minIndex]){
          minIndex = j;
       }
    }
    temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return arr;
}
