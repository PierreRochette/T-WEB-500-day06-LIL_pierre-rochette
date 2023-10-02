export function countGs(str) {

    var count = (str.match(/G/g) || []).length; 
    return count
}