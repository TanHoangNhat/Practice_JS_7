/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Mảng arrayNumber ở global (file main.js)
 * * Xử lý
 * * * Dùng hàm tìm số dương đã tạo ở baitap_1.js để tạo mảng số dương
 * * * Xuất kết quả ra màn hình bằng cách lấy độ dài của mảng
 * * Đầu ra (outut)
 * * * Xuất kết quả ra màn hình
 */

document.getElementById("btnCountPositive").addEventListener("click", function () {
    var newArray = positiveNumberArray(arrayNumber);

    getEle("txtResult__2").innerHTML = "Kết quả: Số lượng số dương trong mảng là " + newArray.length + " số";
});