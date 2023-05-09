
var loginBtn = document.querySelector("#btnLogin");
var dangKyBtn = document.querySelector("#DangKy_Button");
var dangNhapBtn = document.querySelector("#DangNhap_Button")
var navbarUser = document.querySelector(".header__navbar-item.header__navbar-user");
var dangXuatbtn = document.getElementById("btnDangXuat");

let isLOgin = localStorage.getItem("token") ? true : false;

function checkLogin()
{
    if (isLOgin)
    {
        dangKyBtn.remove();
        dangNhapBtn.remove();
        navbarUser.classList.add("loginOK");
        document.querySelector(".close_modal").click()
    }
    else
    {
        // dangKyBtn.add();
    }
}

const listAcccount = [
    {
        username: "phongthcshp500@gmail.com",
        password: "123"
    },
    {
        username: "admin@gmail.com",
        password: "12345"
    }
]

function kiemTraTK()
{
    let emailInput = document.getElementById("txtEmailLG").value;
    let pass = document.getElementById("txtPasswordLG").value;

    let checkLogin = listAcccount.some(value => value.username === emailInput && value.password === pass)
    console.log(checkLogin);

    if (!checkLogin) {
        let userData = JSON.parse(localStorage.getItem(emailInput));
        if (userData && userData.password === pass) {
          checkLogin = true;
        }
      }

    // if (emailInput.value == "phongthcshp500@gmail.com" && pass.value == "123")
    // {
    //     alert("Đăng nhập thành công");
    //     dangKyBtn.remove();
    //     dangNhapBtn.remove();
    //     navbarUser.classList.add("loginOK");
    //     document.querySelector(".close_modal").click()
    // }   
    // else
    //     alert("Tài khoản hoặc mật khẩu không chính xác");

    if (checkLogin)
    {
        alert("Đăng nhập thành công");
        localStorage.setItem("token", emailInput);
        isLOgin = true;
        document.reload();
        document.querySelector(".close_modal").click()
        checkLogin();
    }
    else
    {
        alert("Tài khoản hoặc mật khẩu không chính xác!");
    }
}

dangXuatbtn.addEventListener("click", function()
{
    localStorage.removeItem("token");
    alert("Đã đăng xuất");
});
