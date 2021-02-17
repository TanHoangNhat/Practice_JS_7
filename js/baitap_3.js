/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Mảng arrayNumber ở global (file main.js)
 * * Xử lý
 * * * Cách 1: Dùng hàm sắp xếp tăng dần ở baitap_7.js để tạo hàm mới có thứ tự tăng dần
 * * *         Lấy giá trị ở vị trí [0] của mảng mới là số nhỏ nhất trong mảng cũ
 * * * Cách 2: Tạo hàm tìm giá trị nhỏ nhất, tham số truyền vào là mảng chính
 * * *         Tạo biến var smallestNumber = arrayNumber[0]
 * * *         Dòng vòng lặp, để so sánh từng phần tử với giá trị nhỏ nhất
 * * *         => Phần tử nào nhỏ hơn smallestNumber thì gán phần tử đó vào smallestNumber
 * * Đầu ra (output)
 * * * Xuất kết quả ra màn hình
 */

getEle("btnFindSmallest").addEventListener("click", function () {
    if (arrayNumber.length == 0) {
        alert("Mảng chưa có phần tử! Vui lòng nhập thêm phần tử!");
        return;
    }

    // Cách 1:
    var newArray = arrayNumber.slice(); // Vì hàm sắp xếp đang tác động trực tiếp lên mảng chính, nên cần copy sang mảng mới
    sortAscending_2(newArray);
    getEle("txtResult__3").innerHTML = "Kết quả: Số nhỏ nhất trong mảng là " + newArray[0];

    // // Cách 2:
    // getEle("txtResult__3").innerHTML = "Kết quả: Số nhỏ nhất trong mảng là " + findSmallest(arrayNumber);
});

function findSmallest(array) {
    // Gán phần tử đầu tiên là giá trị nhỏ nhất
    var smallestNumber = array[0];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < smallestNumber) {
            smallestNumber = array[i];
        }
    }

    return smallestNumber;
}