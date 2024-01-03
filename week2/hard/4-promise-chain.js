/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("First Promise resolved");
        }, t * 1000);
    });
}

// This function will return second promise.
function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Second Promise resolved");
        }, t * 1000);
    });
}

// This function will return third promise.
function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Third Promise resolved");
        }, t * 1000);
    });
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();
    // Here, each method returns a promise so we can chain them using .then() method.
    return wait1(t1).then(() => {
            return wait2(t2);
        }).then(() => {
            return wait3(t3);
        }).then(() => {
            const end = Date.now();
            // Find the time difference and return it.
            const difference = end - start;
            return difference;
        });
}

module.exports = calculateTime;
