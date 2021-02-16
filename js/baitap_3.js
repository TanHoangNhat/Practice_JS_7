/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Mảng arrayNumber ở global (file main.js)
 * * Xử lý
 * * * Dùng hàm sắp xếp tăng dần ở baitap_7.js để tạo hàm mới có thứ tự tăng dần
 * * * Lấy giá trị ở vị trí [0] của mảng mới là số nhỏ nhất trong mảng cũ
 * * Đầu ra (output)
 * * * Xuất kết quả ra màn hình
 */

getEle("btnFindSmallest").addEventListener("click", function () {
    if (arrayNumber.length == 0) {
        alert("Mảng chưa có phần tử! Vui lòng nhập thêm phần tử!");
        return;
    }

    var newArray = copySortAscending(arrayNumber);

    getEle("txtResult__3").innerHTML = "Kết quả: Số nhỏ nhất trong mảng là " + newArray[0];
});
