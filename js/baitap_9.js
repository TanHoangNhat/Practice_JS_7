/**
 * Mô hình 3 khối
 * * Đầu vào (input);
 * * * Mảng arrayNumber ở global (file main.js)
 * * * Lấy những số thực người dùng nhập vào cho vào mảng chính (Sử dụng hàm thêm số thực ở file main.js)
 * * Xử lý
 * * * Tạo hàm đếm số nguyên, tham số là mảng chính
 * * * Tạo biến count để đếm
 * * * Đưa vào vòng lặp, với mổi phần tử, lấy ra phần thập phân so sánh với 0
 * * *      => Số nguyên sẽ có phần thập phân bằng 0, tăng biến count
 * * * Trả về biến count
 * * Đầu ra (output)
 * * * Xuất kết quả ra màn hình
 */

getEle("btnCountInteger").addEventListener("click", function () {
    if (arrayNumber.length == 0) {
        alert("Mảng chưa có phần tử! Vui lòng nhập thêm phần tử!");
        return;
    }

    getEle("txtResult__9").innerHTML = "Kết quả: Số lượng số nguyên trong mảng là " + countInteger(arrayNumber);
});

function countInteger(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] - parseInt(array[i]) == 0) {
            count++;
        }
    }
    return count;
}