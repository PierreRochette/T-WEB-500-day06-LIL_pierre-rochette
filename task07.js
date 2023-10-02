export function arrayFiltering(array, test) {

    var filteredArray = []; 

    for (const element of array) {
        if (test(element)) {
            filteredArray.push(element); 
        }

    }

    return filteredArray; 
}