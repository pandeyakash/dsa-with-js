/*
 * ============================================================
 * PROBLEM: Print Numbers from N to 1 Using Recursion
 * ============================================================
 *
 * 
 */


const n = 5;

function printNumbers(num) {
    if(num < 1) return;
    console.log(num);
    printNumbers(num - 1)
}

printNumbers(n);