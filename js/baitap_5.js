/**
 * Mô hình 3 khối
 * * Đầu vào
 * * * Mảng arrayNumber ở global (file main.js)
 * * Xử lý
 * * * Cách 1: Tạo hàm lọc ra các số chẵn trong mảng, tham số truyền vào là mảng chính
 * * *         Lấy phần tử cuối cùng trong mảng mới lọc ra, chỉ số index là length - 1
 * * * Cách 2: Tạo hàm tìm số chẵn cuối cùng
 * * *         Tạo biến var lastEvenNumber = -1;
 * * *         Đưa vào vòng lặp, kiểm tra nếu là số chẵn, gán cho biến lastEvenNumber
 * * *         => Nếu kết quả trả về khác -1, chính là kết quả bài toán
 * * *         => Ngược lại, mảng không tồn tại số chẵn
 * * Đầu ra
 * * * Xuất kết quả ra màn hình
 */

getEle("btnLastEvenNumber").addEventListener("click", function () {
    if (arrayNumber.length == 0) {
        alert("Mảng chưa có phần tử! Vui lòng nhập thêm phần tử!");
        return;
    }

    var result = "";

    // // Cách 1:
    // // var newArray = evenNumberArray(arrayNumber);
    // var newArray = evenNumberArray_2(arrayNumber);

    // if (newArray.length == 0) {
    //     result = "Không có số chẵn trong mảng";
    // } else {
    //     result = "Kết quả: Số chẵn cuối cùng trong mảng là " + newArray[newArray.length - 1];
    // }

    // Cách 2:
    if (findLastEvenNumber(arrayNumber) == -1) {
        result = "Không có số chẵn trong mảng";
    } else {
        result = "Kết quả: Số chẵn cuối cùng trong mảng là " + findLastEvenNumber(arrayNumber);
    }

    getEle("txtResult__5").innerHTML = result;
});

// Hàm lọc ra số chẵn
function evenNumberArray(array) {
    return evenNumberArray = array.filter(function (item) {
        return item % 2 == 0;
    });
}

// Cách 2: Không sử dụng hàm có sẵn
function evenNumberArray_2(array) {
    var newArray = [];

    for (var i = 1; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

function findLastEvenNumber(array) {
    var lastEvenNumber = -1;

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            lastEvenNumber = array[i];
        }
    }

    return lastEvenNumber;
}