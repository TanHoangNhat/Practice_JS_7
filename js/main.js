/**
 * Dành riêng cho phần thêm số vào mảng, và hiển thị mảng lên giao diện
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy dữ liệu người dùng nhập vào input
 * * * Tạo biến arrayNumber ở global
 * * Xử lý
 * * * Thêm từng giá trị vào arrayNumber
 * * * Dùng hàm join để thêm mảng vào chuỗi để hiển thị
 * * Đầu ra
 * * * Xuất kết quả ra màn hình (Thêm số nào xuất ngay số đó)
 */

var arrayNumber = [];

document.getElementById("btnAddNumber").addEventListener("click", function () {
    var number = parseInt(document.getElementById("txtArrayNumber").value);

    arrayNumber.push(number);

    showArray(arrayNumber);
});

function showArray(array) {
    document.getElementById("txtArray").innerHTML = "Mảng hiện có: " + array.join(", ");
}

function getEle(element) {
    return document.getElementById(element);
}