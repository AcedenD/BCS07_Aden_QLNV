function kiemTraRong(checkInput,idThongBao){
    // // console.log("checking empty");
    if(checkInput){
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    }else {
        document.getElementById(idThongBao).innerHTML = "Input không được để trống";
        document.getElementById(idThongBao).style.display = "block";

        return false;
    }
}


function taiKhoanValid(){
    // console.log("checking tai khoan");
    var taiKhoan = document.getElementById("tknv").value;
    var taiKhoanErr = document.getElementById("tbTKNV");
    
    if (taiKhoan.length < 4 || taiKhoan.length > 6){
        taiKhoanErr.innerHTML = "Tài khoản phải từ 4 đến 6 ký tự";
        taiKhoanErr.style.display = "block";
        // console.log("tai khoan khong hop le");
        return false;
    } else {
        taiKhoanErr.style.display = "none";
        // console.log("tai khoan hop le");
        return true;
    }
}

function nameValid(){
    // console.log("checking name");

    var name = document.getElementById("name").value;
    var nameErr = document.getElementById("tbTen");

    
    var regexName = /^[A-Za-z]+$/;
    if (!regexName.test(name)){
        nameErr.innerHTML = "Tên không hợp lệ, tên phải là chữ";
        nameErr.style.display = "block";
        // console.log("ten khong hop le");
        return false;
    }

    // console.log("ten hop le");
    return true;

}

function kiemTraEmail(checkInput,idThongBao){
    // console.log("checking email");

    var emailErr = document.getElementById(idThongBao);
    var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    var hopLe = regexEmail.test(checkInput);

    if(hopLe){
        document.getElementById(idThongBao).innerHTML = "";
        emailErr.style.display = "none";
        // console.log("email hop le");
        return true;
    }else {
        document.getElementById(idThongBao).innerHTML = "Vui long nhap dung email";
        emailErr.style.display = "block";
        // console.log("email khong hop le");
        return false;
    }
}

function kiemTraMatKhau(checkInput,idThongBao) {
    // console.log("checking password");

    var matKhauErr = document.getElementById(idThongBao);

    var regexMatKhau = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){6,10}$/;

    var hopLe = regexMatKhau.test(checkInput);

    if(hopLe){
        document.getElementById(idThongBao).innerHTML = "";
        matKhauErr.style.display = "none";
        // console.log("mat khau hop le");
        return true;
    }else {
        document.getElementById(idThongBao).innerHTML = "Mật khẩu không hợp lệ";
        matKhauErr.style.display = "block";
        // console.log("mat khau khong hop le");
        return false;
    }

}

function kiemTraNgay(checkInput,idThongBao){
    // console.log("checking ngay");

    var ngayErr = document.getElementById(idThongBao);

    var regexNgay = /^\d{2}\/\d{2}\/\d{4}$/;

    var hopLe = regexNgay.test(checkInput);

    if(hopLe){
        document.getElementById(idThongBao).innerHTML = "";
        ngayErr.style.display = "none";
        // console.log("ngay hop le");
        return true;
    }else {
        document.getElementById(idThongBao).innerHTML = "Ngày không hợp lệ";
        ngayErr.style.display = "block";
        // console.log("ngay khong hop le");
        return false;
    }
}

function kiemTraLuong(checkInput,idThongBao) {
    // console.log("checking luong");

    var luongErr = document.getElementById(idThongBao);

    var hopLe = checkInput >= 1000000 && checkInput <= 20000000;

    if(hopLe){
        document.getElementById(idThongBao).innerHTML = "";
        luongErr.style.display = "none";
        // console.log("luong hop le");
        return true;
    }else {
        document.getElementById(idThongBao).innerHTML = "Lương không hợp lệ";
        luongErr.style.display = "block";
        // console.log("luong khong hop le");
        return false;
    }
}

function kiemTraChucVu(checkInput,idThongBao){
    // console.log("checking chuc vu");

    var chucVuErr = document.getElementById(idThongBao);

    // // console.log(checkInput);
    if(checkInput == ""){
        document.getElementById(idThongBao).innerHTML = "Vui lòng chọn chức vụ";
        chucVuErr.style.display = "block";
        // console.log("chuc vu khong hop le");
        return false;
    }else {
        document.getElementById(idThongBao).innerHTML = "";
        chucVuErr.style.display = "none";
        // console.log("chuc vu hop le");
        return true;
    }
}

function kiemTraGioLam(checkInput,idThongBao){
    // console.log("checking gio lam");

    var gioLamErr = document.getElementById(idThongBao);

    var hopLe = checkInput >= 80 && checkInput <= 200;

    if(hopLe){
        document.getElementById(idThongBao).innerHTML = "";
        gioLamErr.style.display = "none";
        // console.log("gio lam hop le");
        return true;
    }else {
        document.getElementById(idThongBao).innerHTML = "Giờ làm không hợp lệ";
        gioLamErr.style.display = "block";
        // console.log("gio lam khong hop le");
        return false;
    }
}


