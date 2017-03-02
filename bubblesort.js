function bubbleSort(arr){
<<<<<<< HEAD

    var temp = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        for(var z=i+1;z<arr.length; z++){
            if(arr[i] > arr[z]){
                temp = arr[i];
                console.log(arr[i]);
            }
        }
    }
    return output;
}
=======
>>>>>>> 767bd156673d4bffc885043390142ee718e5f727

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
