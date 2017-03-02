function bubbleSort(arr){

    var temp = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        
        for(var z=i+1;z < arr.length; z++){
            
            if(arr[i] > arr[z]){
                temp = arr[i];
            	arr[i] = arr[z];
            	arr[z] = temp;    
            }
        }

    }
    return arr;
}
