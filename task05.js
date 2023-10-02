function range(start, end, step) {

    if (step === undefined) {
        step = 1; 
    }

    let arr = []; 

    if (start <= end) {
        for (let i = start; i <= end; i += step) {
            arr.push(i); 
        }
    } else {
        for (let i = start; i >= end; i += step) {
            arr.push(i); 
        }
    }

        return arr; 
    }

module.exports = {range}
