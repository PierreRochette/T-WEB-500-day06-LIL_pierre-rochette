export function arraysAreEqual(arr1, arr2) {

    var test1 = arr1.toString(); 
    var test2 = arr2.toString();

    if (test1 === test2) {
        return true; 
    } else {
        return false;
    }
}