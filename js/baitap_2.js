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

getEle("btnCountPositive").addEventListener("click", function () {
    if (arrayNumber.length == 0) {
        alert("Mảng chưa có phần tử! Vui lòng nhập thêm phần tử!");
        return;
    }
    var newArray = positiveNumberArray(arrayNumber);

    getEle("txtResult__2").innerHTML = "Kết quả: Số lượng số dương trong mảng là " + newArray.length + " số";
});