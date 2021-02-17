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
    if (arrayNumber.length == 0) {
        alert("Mảng chưa có phần tử! Vui lòng nhập thêm phần tử!");
        return;
    }

    // sortAscending(arrayNumber);
    sortAscending_2(arrayNumber);

    showArray(arrayNumber);
});

getEle("btnSortDecreasing").addEventListener("click", function () {
    if (arrayNumber.length == 0) {
        alert("Mảng chưa có phần tử! Vui lòng nhập thêm phần tử!");
        return;
    }

    // sortDecreasing(arrayNumber);
    sortDecreasing_2(arrayNumber);

    showArray(arrayNumber);
});

// Hàm sắp xếp tăng dần
function sortAscending(array) {
    return array.sort(function (a, b) {
        return a - b;
    })
}

// Cách 2: Không sử dụng hàm có sẵn
// Kết hợp sử dụng hàm swapArrayItem ở bài tập 6
function sortAscending_2(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                swapArrayItem(array, j + 1, j);
            }
        }
    }
}

// Hàm sắp xếp giảm dần
function sortDecreasing(array) {
    return array.sort(function (a, b) {
        return b - a;
    })
}

// Cách 2: Không sử dụng hàm có sẵn
// Kết hợp sử dụng hàm swapArrayItem ở bài tập 6
function sortDecreasing_2(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
            if (array[j] < array[j + 1]) {
                swapArrayItem(array, j + 1, j);
            }
        }
    }
}