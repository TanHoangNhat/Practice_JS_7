/**
 * Mô hình 3 khối
 * * Đầu vào
 * * * Mảng arrayNumber ở global (file main.js)
 * * * Lấy giá trị 2 vị trí mà người dùng nhập vào
 * * Xử lý
 * * * Tạo hàm swap, tham số là mảng cần đổi chỗ, 2 vị trí muốn đổi chỗ
 * * Đầu ra
 * * * Cập nhật lại kết quả đã đổi chỗ, xuất lại lên màn hình
 */

document.getElementById("btnSwap").addEventListener("click", function () {
    var position_1 = parseInt(getEle("txtPosition_1").value) - 1;
    var position_2 = parseInt(getEle("txtPosition_2").value) - 1;

    if (position_1 < 0 || position_1 > arrayNumber.length - 1 || position_2 < 0 || position_2 > arrayNumber.length - 1) {
        document.getElementById("txtResult__6").innerHTML = "Vị trí nhập vào chưa đúng!"
    } else {
        swapArray(arrayNumber, position_1, position_2);
        showArray(arrayNumber);
    }
});

function swapArray(array, position_1, position_2) {
    var n = 0;
    n = array[position_1];
    array[position_1] = array[position_2];
    array[position_2] = n;
}