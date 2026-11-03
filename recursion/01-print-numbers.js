/*
 * ============================================================
 * PROBLEM: Print Numbers from 1 to N Using Recursion
 * ============================================================
 *
 * 
 */


const n = 5;

function printNumbers(num) {
    if(num > n) return;
    console.log(num);
    printNumbers(num + 1)
}

printNumbers(1);