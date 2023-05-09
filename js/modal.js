const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");
const dangNhapButton = document.getElementById("DangNhap_Button");
const modalBody = document.getElementById("modal_body")
const closeModal = document.getElementById("close_modal");
const dangKyButton = document.getElementById("DangKy_Button");
const overLay = document.querySelector(".modal__overlay");
const container1 = document.querySelector(".container_modal");
var BtnRegister = document.getElementById("registerBtn")

const txtName = document.getElementById("txtName");
const txtAdd = document.getElementById("txtAddress");

let ckName = false;
let ckPhone = false;
let ckEmail = false;
let ckPass = false;

function validateName()
{
  const vali = document.getElementById("valiName");
  const input = document.getElementById("txtName");
  const regex = /^[a-zA-Z\s]{4,}$/g;
  if (regex.test(txtName.value) == false)
  {
    vali.classList.add("not");
    input.classList.add("not");
    vali.textContent = "Tên phải > 3 ký tự và không chứa chữ số or ký tự đặc biệt";
    ckName = false;
  }
  else
  {
    vali.classList.remove("not")
    input.classList.remove("not")
    vali.textContent = "(*)";
    ckName = true;
  }
}

function validatePhone()
{
  const vali = document.getElementById("valiPhone");
  const input = document.getElementById("txtPhone");
  const regex = /^\d{10}$/g;
  if (regex.test(input.value) == false || input.value == "")
  {
    vali.classList.add("not");
    vali.innerHTML = "no";
    input.classList.add("not");
    vali.textContent = "Số điện thoại phải đủ 10 số!";
    ckPhone = false;
  }
  else
  {
    vali.classList.remove("not");
    input.classList.remove("not");
    vali.innerHTML= "(*)";
    ckPhone = true;
  }
}

function validateEmail()
{
  const vali = document.getElementById("valiEmail");
  const input = document.getElementById("txtEmail");
  const regex = /^[^\s@]+@gmail\.com$/;
  if (regex.test(input.value) == false)
  {
    vali.classList.add("not");
    input.classList.add("not");
    vali.textContent = "Email phải chứa @gmail.com";
    ckEmail = false;
  }
  else
  {
    vali.classList.remove("not")
    input.classList.remove("not")
    vali.textContent = "(*)";
    ckEmail = true;
  }
}

function validatePass()
{
  const vali = document.getElementById("valiPass");
  const input = document.getElementById("txtPass");
  const regex = /^[A-Z][a-zA-Z0-9]{5,}$/;
  if (regex.test(input.value) == false)
  {
    vali.classList.add("not");
    input.classList.add("not");
    vali.textContent = "Password phải lớn hơn 6 ký tự và viết hoa ký tự đầu tiên";
    ckPass = false;
  }
  else
  {
    vali.classList.remove("not")
    input.classList.remove("not")
    vali.textContent = "(*)";
    ckPass = true;
  }
}

function check()
{
  if (ckName && ckPhone && ckEmail && ckPass)
  {
    const email = document.getElementById("txtEmail");
    const password = document.getElementById("txtPass");

    const user = {
      username: email.value,
      password: password.value,
    };

    let json = JSON.stringify(user);
    localStorage.setItem(email.value, json);
    alert("Đăng ký thành công");
    
  }
  else
    alert("vui lòng nhập đúng yêu cầu");
}



registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

dangNhapButton.addEventListener("click", () => {
  modalBody.classList.add("modal_body-active");
  loginButton.click();
});

closeModal.addEventListener("click", () => {
  modalBody.classList.remove("modal_body-active")
});

dangKyButton.addEventListener("click", () => {
  modalBody.classList.add("modal_body-active");
  registerButton.click();
});

function hideModal()
{
  container.classList.remove("right-panel-active");
}

container1.addEventListener('click', function (event) {
  event.stopPropagation();
});

overLay.addEventListener('click', function (event) {
  event.stopPropagation();
});

