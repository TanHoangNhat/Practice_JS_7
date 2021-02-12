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

document.getElementById("btnFindSmallest").addEventListener("click", function () {
    var newArray = sortAscending(arrayNumber).map(function (item) {
        return item;
    });

    document.getElementById("txtResult__3").innerHTML = "Kết quả: Số nhỏ nhất trong mảng là " + newArray[0];
});
