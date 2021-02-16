/**
 * Mô hình 3 khối
 * * Đầu vào
 * * * Mảng arrayNumber ở global (file main.js)
 * * Xử lý
 * * * Dùng hàm lọc số dương đã tạo ở baitap_1.js
 * * * Dùng hàm sắp xếp tăng dần đã tạo ở baitap_7.js
 * * * Lấy phần tử [0] của mảng vừa sắp xếp
 * * Đầu ra
 * * * Xuất kết quả ra màn hình
 */

getEle("btnFindSmallestNumber").addEventListener("click", function () {
    if (arrayNumber.length == 0) {
        alert("Mảng chưa có phần tử! Vui lòng nhập thêm phần tử!");
        return;
    }

    var positiveArray = positiveNumberArray(arrayNumber);

    var sortPositiveArray = copySortAscending(positiveArray);

    getEle("txtResult__4").innerHTML = "Kết quả: Số dương nhỏ nhất trong mảng là " + sortPositiveArray[0];
});