function NhanVien(_TKNV,_name,_email,_matKhau,_ngayLam,_luong,_chucVu,_gioLam) {
    this.TKNV = _TKNV;
    this.name = _name;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luong = _luong;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";
    this.tinhTongLuong = function () {
        if(this.chucVu == "Sếp") {
            this.tongLuong = this.luong * 3;
        } else if(this.chucVu == "Trưởng phòng") {
            this.tongLuong = this.luong * 2;

        } else if(this.chucVu == "Nhân viên") {
            this.tongLuong = this.luong * 1;
        }
        return this.tongLuong;
    }
    this.xepLoaiNV = function () {
        if(this.gioLam >= 192) {
            this.xepLoai = "Xuất sắc";
        } else if(this.gioLam >= 176) {
            this.xepLoai = "Giỏi";
        } else if(this.gioLam >= 160) {
            this.xepLoai = "Khá";
        } else {
            this.xepLoai = "Trung bình";
        }
        return this.xepLoai;
    }
}
