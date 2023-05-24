// get Nhan Vien Info

function getNhanVienInfo() {
    var tknv = document.getElementById("tknv").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luong = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;
    
    var valid = kiemTraRong(tknv,"tbTKNV") & kiemTraRong(name,"tbTen") & kiemTraRong(email,"tbEmail") & kiemTraRong(matKhau,"tbMatKhau") & kiemTraRong(ngayLam,"tbNgay") & kiemTraRong(luong,"tbLuongCB") & kiemTraRong(chucVu,"tbChucVu") & kiemTraRong(gioLam,"tbGiolam");

    valid &= taiKhoanValid() & nameValid() & kiemTraEmail(email,"tbEmail") & kiemTraMatKhau(matKhau,"tbMatKhau") & kiemTraNgay(ngayLam,"tbNgay") & kiemTraLuong(luong,"tbLuongCB") & kiemTraChucVu(chucVu,"tbChucVu") & kiemTraGioLam(gioLam,"tbGiolam");

    if(!valid){
        return;
    }


    var nhanVien = new NhanVien(tknv,name,email,matKhau,ngayLam,luong,chucVu,gioLam);

    

    return nhanVien;
}

// fill in form Info
function fillFormInfo(tknv,name,email,matKhau,ngayLam,luong,chucVu,gioLam){
    document.getElementById("tknv").value = tknv;
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("password").value = matKhau;
    document.getElementById("datepicker").value = ngayLam;
    document.getElementById("luongCB").value = luong;
    document.getElementById("chucvu").value = chucVu;
    document.getElementById("gioLam").value = gioLam;

}

// use to save array to local
function saveStorage(arrNhanVien){
    localStorage.setItem("mangNhanVien",JSON.stringify(arrNhanVien));
}

// get array from local
function getStorage(){
    // check to see if there is a "key" in local
    var arrNhanVienLocal = JSON.parse(localStorage.getItem("mangNhanVien"));
    if(arrNhanVienLocal != null){
        arrNhanVien = arrNhanVienLocal;
    }
}