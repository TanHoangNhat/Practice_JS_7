/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Mảng arrayNumber ở global (file main.js)
 * * Xử lý
 * * * Tạo hàm kiểm tra số nguyên tố (Cải tiến từ hàm ở bài tập buổi 6)
 * * * 
 * * * Lặp các phần tử trong mảng, đối với mỗi phần tử, gọi hàm kiểm tra số nguyên tố
 * * *      => Nếu kết quả trả về true, xuất phần tử đó, đồng thời dừng vòng lặp
 * * Đầu ra (output)
 * * * Xuất kết quả ra màn hình
 */

getEle("btnFindFirstPrimeNumber").addEventListener("click", function () {
    var firstPrimeNumber = 0;
    var result = "";

    for (var i = 0; i < arrayNumber.length; i++) {
        if (checkSNT(arrayNumber[i])) {
            firstPrimeNumber = arrayNumber[i];
            break;
        }
    }

    if (firstPrimeNumber != 0) {
        result = "Kết quả: Số nguyên tố đầu tiên trong mảng là " + firstPrimeNumber;
    } else {
        result = "Trong mảng không tồn tại số nguyên tố!";
    }

    getEle("txtResult__8").innerHTML = result;
});

function checkSNT(number) {
    if (number < 2) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}