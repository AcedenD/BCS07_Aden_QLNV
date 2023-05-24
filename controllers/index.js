

var arrNhanVien = [];

getStorage();
renderNhanVien(arrNhanVien);

function resetModal(){
    document.getElementById("tknv").disabled = false;
    document.getElementById("btnThemNV").disabled = false;
    document.getElementById("password").disabled = false;
    document.getElementById("btnCapNhat").disabled = true;
    document.getElementById("btnViewPass").style.display = "inline-block";
    fillFormInfo("","","","","","","","");
}

document.getElementById("btnThem").onclick = resetModal;


function renderNhanVien(arrNV){
    // var nhanVien = new NhanVien();
    var content = "";

    for(var i = 0; i < arrNV.length; i++){
        var nhanVien =  new NhanVien();
        var NhanVienItem = arrNV[i];
        Object.assign(nhanVien,NhanVienItem);
        // console.log(nhanVien);
        arrNV[i].tongLuong = nhanVien.tinhTongLuong();
        arrNV[i].xepLoai = nhanVien.xepLoaiNV();
        content += `
        <tr>
                <td>${nhanVien.TKNV}</td>
                <td>${nhanVien.name}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngayLam}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${arrNV[i].tongLuong.toFixed(1)}</td>
                <td>${arrNV[i].xepLoai}</td>
                <td>
                    <button class="btn btn-danger mr-3" onclick="xoanhanVien('${nhanVien.TKNV}')">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="btn btn-warning" onclick="editNhanVien('${nhanVien.TKNV}')" data-toggle="modal" data-target="#myModal">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                </td>
        </tr>
        
        `
    }

    // console.log(sinhVien);

    document.getElementById("tableDanhSach").innerHTML = content;
}

function themNhanVien(){


    var nhanVien = getNhanVienInfo();

    if(nhanVien){

    arrNhanVien.push(nhanVien);

    fillFormInfo("","","","","","","","");
    saveStorage(arrNhanVien);
    renderNhanVien(arrNhanVien);
    }
}


document.getElementById("btnThemNV").onclick = themNhanVien;


function xoanhanVien(tknv){
    for(var i = arrNhanVien.length - 1; i >= 0; i--){
        var nhanVien = arrNhanVien[i];
        if(nhanVien.TKNV == tknv){
            arrNhanVien.splice(i,1);
        }
    }

    // console.log(arrNhanVien);
    saveStorage(arrNhanVien);
    renderNhanVien(arrNhanVien);
}

function editNhanVien(tknv){
    for(var i = 0; i < arrNhanVien.length; i++){
        var nhanVien = arrNhanVien[i];
        if(nhanVien.TKNV == tknv){
            fillFormInfo(nhanVien.TKNV,nhanVien.name,nhanVien.email,nhanVien.matKhau,nhanVien.ngayLam,nhanVien.luong,nhanVien.chucVu,nhanVien.gioLam);
            
            document.getElementById('password').type = "password";
            document.getElementById("tknv").disabled = true;
            document.getElementById("btnThemNV").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("btnViewPass").style.display = "none";
            document.getElementById("btnCapNhat").disabled = false;
            document.getElementById("btnCapNhat").onclick = capNhatNhanVien;
        }
    }
}

function capNhatNhanVien(){
    var nhanVien = getNhanVienInfo();
    if(nhanVien){
        for(var i = 0; i < arrNhanVien.length; i++){
            var nhanVienInArr = arrNhanVien[i];
            if(nhanVienInArr.TKNV == nhanVien.TKNV){
                Object.assign(nhanVienInArr,nhanVien);
            }
    }

    saveStorage(arrNhanVien);
    renderNhanVien(arrNhanVien);
    }
}

// clear error message when leave modal

document.getElementById("myModal").onhidden = function(){
    document.querySelectorAll(".form-group input").forEach(function(input){
        input.value = "";
    })
}

// Tim nhan vien
const loaiNVArr = ["All","Xuất sắc","Giỏi","Khá","Trung bình"];

function timNhanVien(){
    var loaiNV = document.getElementById("searchName").value;

    loaiNV =  loaiNV.charAt(0).toUpperCase() + loaiNV.slice(1);

    console.log("tim nhan vien: " + loaiNV);

    if(loaiNVArr.indexOf(loaiNV) == -1){
        alert("Loại nhân viên không hợp lệ");
        return;
    }else if(loaiNVArr.indexOf(loaiNV) >= 1 && loaiNVArr.indexOf(loaiNV) <= 4){
        var tempNVArr = [];
        

        console.log(arrNhanVien);

        arrNhanVien.forEach((item)=> {
            console.log(item.xepLoai + " : " + loaiNV);
            console.log(item.xepLoai == loaiNV);
            if(item.xepLoai == loaiNV){
                console.log("add nv vo temparr ne");
                tempNVArr.push(item);
            }
        });
        console.log(tempNVArr);
        renderNhanVien(tempNVArr);
    }else(
        renderNhanVien(arrNhanVien)
    )


}

document.getElementById("btnTimNV").onclick = timNhanVien;


function toggleVisibility() {
    const passwordInput = document.getElementById('password');
    
    if (passwordInput.type == 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

document.getElementById("btnViewPass").onclick = toggleVisibility;