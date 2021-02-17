/**
 * Mô hình 3 khối
 * * Đầu vào
 * * * Mảng arrayNumber ở global (file main.js)
 * * Xử lý
 * * * Cách 1: Dùng hàm lọc số dương ở baitap_1.js và hàm sắp xếp tăng dần ở baitap_7.js
 * * *         Lấy phần tử [0] của mảng mới, là kết quả của bài toán
 * * * Cách 2: Dùng hàm lọc số dương ở baitap_1.js kết hợp với hàm tìm giá trị nhỏ nhất ở baitap_3.js
 * * Đầu ra
 * * * Xuất kết quả ra màn hình
 */

getEle("btnFindSmallestNumber").addEventListener("click", function () {
    if (arrayNumber.length == 0) {
        alert("Mảng chưa có phần tử! Vui lòng nhập thêm phần tử!");
        return;
    }

    // Cách 1:
    var positiveArray = positiveNumberArray(arrayNumber);
    sortAscending(positiveArray);
    getEle("txtResult__4").innerHTML = "Kết quả: Số dương nhỏ nhất trong mảng là " + positiveArray[0];

    // // Cách 2:
    // var positiveArray = positiveNumberArray(arrayNumber);
    // getEle("txtResult__4").innerHTML = "Kết quả: Số dương nhỏ nhất trong mảng là " + findSmallest(positiveArray);
});