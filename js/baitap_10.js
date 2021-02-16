/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Mảng arrayNumber ở global (file main.js)
 * * Xử lý
 * * * Sử dụng 2 hàm lọc ra mảng số âm và mảng số dương ở bài tập 1 (file baitap_1.js)
 * * * So sánh độ dài của 2 mảng đã lọc
 * * *      => Mảng nào lớn hơn có số lượng phần tử nhiều hơn
 * * Đầu ra (output)
 * * * Xuất kết quả so sánh ra màn hình
 */

getEle("btnCompare").addEventListener("click", function () {
    var positiveArray = positiveNumberArray(arrayNumber);
    var negativeArray = negativeNumberArray(arrayNumber);

    var result = "Kết quả: ";

    if (arrayNumber.length == 0) {
        alert("Mảng chưa có phần tử! Vui lòng nhập thêm phần tử!");
        return;
    }

    if (positiveArray.length == 0 && negativeArray.length > 0) {
        result += "Mảng chỉ có số âm, không có số dương.";
    } else if (positiveArray.length > 0 && negativeArray.length == 0) {
        result += "Mảng chỉ có số dương, không có số âm.";
    } else if (positiveArray.length > negativeArray.length) {
        result += "Số dương nhiều hơn số âm.";
    } else {
        result += "Số âm nhiều hơn số dương.";
    }

    getEle("txtResult__10").innerHTML = result;
});