"use strict";
/**
 * 
 * @param {number} num number to be tested if prime
 * @return {boolean} result
 */
function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

/**
 * 
 * @param {number} num number to be test if odd
 * @return {boolean} result
 */
function isOdd(num) {
    return num % 2 !== 0;
}

module.exports = { checkPrime, isOdd };