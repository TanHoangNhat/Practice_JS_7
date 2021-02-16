/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Mảng arrayNumber ở global (file main.js)
 * * Xử lý
 * * * Tạo hàm tạo mảng số dương, tham số truyền vào là mảng gốc
 * * *      => Dùng hàm filter của mảng để lọc những số với điều kiện > 0
 * * *      => Trả về mảng số dương
 * * * Tạo hàm tính tổng những số trong mảng, tham số truyền vào là mảng cần tính tổng
 * * * Tạo biến sum = 0 để lưu kết quả tổng
 * * *      => Dùng hàm forEach để duyệt từng thành phần của mảng, cộng dồn vào biến sum
 * * *      => Trả về tổng của mảng
 * * * Ở hàm sự kiện click của button gọi hàm tạo mảng số dương, từ đó dùng hàm tính tổng để xuất kết quả
 * * Đầu ra
 * * * Xuất kết quả ra màn hình
 */

getEle("btnSum").addEventListener("click", function () {
    if (arrayNumber.length == 0) {
        alert("Mảng chưa có phần tử! Vui lòng nhập thêm phần tử!");
        return;
    }

    var newArray = positiveNumberArray(arrayNumber);

    getEle("txtResult__1").innerHTML = "Kết quả: Tổng các số dương trong mảng là " + sumArrayItem(newArray);
});

function positiveNumberArray(array) {
    return positiveArray = array.filter(function (number) {
        return number > 0;
    });
}

// Hàm lọc ra số âm (phục vụ cho chức năng ở bài tập 10)
function negativeNumberArray(array) {
    return negativeArray = array.filter(function (number) {
        return number < 0;
    });
}

function sumArrayItem(array) {
    var sum = 0;
    array.forEach(function (item) {
        sum += item;
    });
    return sum;
}