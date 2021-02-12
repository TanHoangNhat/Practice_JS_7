/**
 * Mô hình 3 khối
 * * Đầu vào
 * * * Mảng arrayNumber ở global (file main.js)
 * * Xử lý
 * * * Tạo hàm lọc ra các số chẵn trong mảng, tham số truyền vào là mảng chính
 * * * Lấy phần tử cuối cùng trong mảng mới lọc ra, chỉ số idex là length - 1
 * * Đầu ra
 * * * Xuất kết quả ra màn hình
 */

document.getElementById("btnLastEvenNumber").addEventListener("click", function () {
    var newArray = evenNumberArray(arrayNumber);

    var result = "";

    if (newArray.length == 0) {
        result = "Không có số chẵn trong mảng";
    } else {
        result = "Kết quả: Số chẵn cuối cùng trong mảng là " + newArray[newArray.length - 1];
    }
    
    document.getElementById("txtResult__5").innerHTML = result;
});

function evenNumberArray(array) {
    var evenNumberArray = array.filter(function (item) {
        return item % 2 == 0;
    });
    return evenNumberArray;
}