//------------Bài Tập 1--------------//

// Mô hình 3 khối
/* 
Đầu vào: Điểm chuẩn, Khu vực ưu tiên, Đối tượng ưu tiên, Điểm 3 môn

Các bước xử lí: Lấy điểm chuẩn, khu vực, đối tượng rồi tính trung bình 3 môn. Nếu không đủ sẽ điểm sẽ trượt và ngược lại

Đầu ra: Hiển thị dữ liệu lên UI
*/
const KHONGCO_KV = "khongCoKV";
const KHUVUC_A = "khuVucA";
const KHUVUC_B = "khuVucB";
const KHUVUC_C = "khuVucC";

const KHONGCO_DT = "khongCoDT";
const DOITUONG_1 = "doiTuong1";
const DOITUONG_2 = "doiTuong2";
const DOITUONG_3 = "doiTuong3";

document.getElementById("btn1").onclick = function () {
  var diemChuan = document.getElementById("diemChuan").value * 1;
  console.log(diemChuan);

  var diemTB = 0;
  // var diemCongKhuVuc = 0;
  // var diemCongDoiTuong = 0;
  var ketQua1 = "";
  var loaiKhuVuc = document.getElementById("khuVuc").value;
  console.log(loaiKhuVuc);
  var loaiDoiTuong = document.getElementById("doiTuong").value;
  console.log(loaiDoiTuong);

  if (loaiKhuVuc == KHONGCO_KV) {
    diemCongKhuVuc = 0;
  } else if (loaiKhuVuc == KHUVUC_A) {
    diemCongKhuVuc = 2;
  } else if (loaiKhuVuc == KHUVUC_B) {
    diemCongKhuVuc = 1;
  } else {
    diemCongKhuVuc = 0.5;
  }
  console.log(diemCongKhuVuc);

  if (loaiDoiTuong == KHONGCO_DT) {
    diemCongDoiTuong = 0;
  } else if (loaiDoiTuong == DOITUONG_1) {
    diemCongDoiTuong = 2.5;
  } else if (loaiDoiTuong == DOITUONG_2) {
    diemCongDoiTuong = 1.5;
  } else {
    diemCongDoiTuong = 1;
  }
  console.log(diemCongDoiTuong);

  var diemMon1 = document.getElementById("diemMon1").value * 1;
  var diemMon2 = document.getElementById("diemMon2").value * 1;
  var diemMon3 = document.getElementById("diemMon3").value * 1;

  diemTB =
    (diemMon1 + diemMon2 + diemMon3) / 3 + (diemCongKhuVuc + diemCongDoiTuong);
  console.log(diemTB);
  if ((diemMon1, diemMon2, diemMon3 <= 0)) {
    ketQua1 = "Học hành kiểu gì mà bị 0 điểm zạ. Trượt là đúng";
    // console.log(ketQua1);
  } else if (diemTB < diemChuan) {
    ketQua1 = "Rất tiếc! Bạn đã trượt vì không đủ diểm";
  } else {
    ketQua1 = "Xin chúc mừng. Bạn đã đậu";
  }
  document.getElementById("kq1").innerHTML = ketQua1;
};

//----------Bài Tập 2-------------//
/*
Mô hình 3 khối
Đầu vào: Họ Tên, Số KW người dùng nhập

Các bước xử lí: Tính tiền theo số KW theo từng bậc

Đầu ra: Hiển thị họ tên và số tiền điện
*/
// Bài Làm

document.getElementById("btn2").onclick = function () {
  var hoTen = document.getElementById("hoTen").value;
  var soKW = document.getElementById("soKW").value * 1;

  if (Number(hoTen)) {
    alert("Họ tên không hợp lệ");
  }

  if (soKW <= 50) {
    giaKWDauTien = 500;
  } else if (soKW > 50 && soKW <= 100) {
    giaKWThuHai = 650;
  } else if (soKW > 100 && soKW <= 200) {
    giaKWThuBa = 850;
  } else if (soKW > 200 && soKW <= 350) {
    giaKWThuTu = 1100;
  } else {
    giaKWConLai = 1300;
  }

  var ketQua2 = 0;
  if (soKW <= 50) {
    ketQua2 = giaKWDauTien * soKW;
  } else if (soKW > 50 && soKW <= 100) {
    ketQua2 = giaKWDauTien * 50 + giaKWThuHai * (soKW - 50);
  } else if (soKW > 100 && soKW <= 200) {
    ketQua2 = giaKWDauTien * 50 + giaKWThuHai * 50 + giaKWThuBa * (soKW - 100);
  } else if (soKW > 200 && soKW <= 350) {
    ketQua2 =
      giaKWDauTien * 50 +
      giaKWThuHai * 50 +
      giaKWThuBa * 100 +
      giaKWThuTu * (soKW - 200);
  } else {
    ketQua2 =
      giaKWDauTien * 50 +
      giaKWThuHai * 50 +
      giaKWThuBa * 100 +
      giaKWThuTu * 150 +
      giaKWConLai * (soKW - 350);
  }
  document.getElementById("kq2").innerHTML =
    "Họ Và Tên: " +
    hoTen +
    ";     Số tiền điện của bạn là: " +
    ketQua2.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
};

// Bài Tập 3

document.getElementById("btn3").onclick = function () {
  var hoTenTinhThue = document.getElementById("hoTenTinhThue").value;
  var thuNhapMotNam = document.getElementById("thuNhapMotNam").value * 1;
  var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  if (Number(hoTenTinhThue)) {
    alert("Họ tên không hợp lệ");
  }
  // console.log(hoTenTinhThue);
  var ketQua3 = 0;
  var thuNhapChiuThue = thuNhapMotNam - 4000000 - soNguoiPhuThuoc * 1600000;

  // console.log(thuNhapChiuThue);
  // if (thuNhapMotNam < 6000000) {
  //   alert("Số thu nhập không hợp lệ");
  // } else if (thuNhapChiuThue <= 60000000) {
  //   ketQua3 = thuNhapChiuThue * 0.05;
  //   // console.log(ketQua3);
  // } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
  //   ketQua3 = 60000000 * 0.05 + (thuNhapChiuThue - 30000000) * 0.1;
  //   console.log(ketQua3);
  // } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
  //   ketQua3 =
  //     60000000 * 0.05 + 120000000 * 0.1 + (thuNhapChiuThue - 100000000) * 0.15;
  //   console.log(ketQua3);
  // } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
  //   ketQua3 =
  //     60000000 * 0.05 +
  //     120000000 * 0.1 +
  //     210000000 * 0.15 +
  //     (thuNhapChiuThue - 230000000) * 0.2;
  //   console.log(ketQua3);
  // }
};
