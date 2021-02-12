
function sortAscending(array) {
    // Vì hàm sort tác động trực tiếp lên mảng chính nên cần copy mảng chính ra mảng mới
    var newArray = array.map(function (item) {
        return item;
    });

    return newArray.sort(function (a, b) {
        return a - b;
    });
}

function sortDecreasing(array) {
    var newArray = array.map(function (item) {
        return item;
    });

    return newArray.sort(function (a, b) {
        return b - a;
    });
}