module.exports = function reverse(n) {
    let str = String(n);

    if (str.substring(0, 1) === "-") {
        return +str.slice(1).split("").reverse().join("");
    } else {
        return +str.split("").reverse().join("");
    }
};
