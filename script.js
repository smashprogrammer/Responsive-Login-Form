// This is javascript page

const pass_info = document.querySelector(".password");
const show_btn = document.querySelector("#show");
const hide_btn = document.querySelector("#hide");

hide_btn.addEventListener("click", function () {
  if (pass_info.type === "password") {
    pass_info.type = "text";
    show_btn.style.display = "block";
    hide_btn.style.display = "none";
  } else {
    pass_info.type = "password";
  }
});
show_btn.addEventListener("click", function () {
  if (pass_info.type === "text") {
    pass_info.type = "password";
    hide_btn.style.display = "block";
    show_btn.style.display = "none";
  } else {
    pass_info.type = "text";
  }
});
