/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Mảng arrayNumber ở global (file main.js)
 * * Xử lý
 * * * Tạo 2 hàm sắp xếp tăng và sắp xếp giảm, đầu vào là mảng chính
 * * * Sử dụng hàm sort đã được hướng dẫn trong slide
 * * Đầu ra (output)
 * * * Cập nhật kết
 */

getEle("btnSortAscending").addEventListener("click", function () {
    sortAscending(arrayNumber);

    showArray(arrayNumber);
});

getEle("btnSortDecreasing").addEventListener("click", function () {
    sortDecreasing(arrayNumber);

    showArray(arrayNumber);
});


function sortAscending(array) {
    return array.sort(function (a, b) {
        return a - b;
    })
}

function sortDecreasing(array) {
    return array.sort(function (a, b) {
        return b - a;
    })
}

// Hai hàm dưới có chức năng copy sang mảng mới và sort, phục vụ cho các chức năng ở những bài tập khác
function copySortAscending(array) {
    // Vì hàm sort tác động trực tiếp lên mảng chính nên cần copy mảng chính ra mảng mới
    var newArray = array.map(function (item) {
        return item;
    });

    return newArray.sort(function (a, b) {
        return a - b;
    });
}

function copySortDecreasing(array) {
    var newArray = array.map(function (item) {
        return item;
    });

    return newArray.sort(function (a, b) {
        return b - a;
    });
}