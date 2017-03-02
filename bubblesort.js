function bubbleSort(arr){

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



// //
// //     for (var j = i + 1; j < output.length; j++) {
// //
// //         // if(output[i] > output[j]){
// //         //     temp = output[i];
// //         //     output[i] = output[j];
// //         //     output[j]=temp;
// //         // }
// //
//
//
//         if (output[j-1] > output[j]) {
//             temp = output[j - 1];
//             output[j - 1] = output[j];
//             output[j] = temp;
//             // temp = output[j];
//             console.log(output);
//         }
//     }
