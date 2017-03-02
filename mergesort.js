function split(arr) {
    var first = arr.slice(0, arr.length/2);
    var second = arr.slice(arr.length/2, arr.length);
    return [first, second];
}


function merge(arr1,arr2){

    var arrHead1 = 0;
    var arrHead2 = 0;

    var output = [];
    while ((arrHead1 < arr2.length) && (arrHead2 < arr1.length){
        if (arr1[arrHead1] > arr2[arrHead2]){
            output.push(arr1[arrHead1]);
            arrHead1++;
        }
        else{
            output.push(arr2[arrHead2]);
            arrHead2++;
        }
    }
    return output;
}

