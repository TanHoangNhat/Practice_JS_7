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

getEle("btnAddNumber").addEventListener("click", function () {
    var number = parseFloat(getEle("txtArrayNumber").value);

    if (isNaN(number)) {
        alert("Vui lòng nhập số!");
        return;
    } else if (number - parseInt(number) != 0) {
        alert("Vui lòng nhập vào số nguyên!");
        return;
    }

    arrayNumber.push(number);

    showArray(arrayNumber);
});

// Hàm này để thêm số thực, phục vụ cho chức năng ở bài tập 9
getEle("btnAddRealNumber").addEventListener("click", function () {
    var number = parseFloat(getEle("txtRealNumber").value);

    if (isNaN(number)) {
        alert("Vui lòng nhập số!");
        return;
    }

    arrayNumber.push(number);

    showArray(arrayNumber);
})

function showArray(array) {
    getEle("txtArray").innerHTML = "Mảng hiện có: " + array.join(", ");
}

function getEle(element) {
    return document.getElementById(element);
}