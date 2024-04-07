document.addEventListener("DOMContentLoaded", function () {
  // متغیرهای مورد نیاز برای دسترسی به المان‌های DOM
  let openModalBtn = document.getElementById("openModal"); // دکمه باز کردن مودال
  let modal = document.getElementById("myModal"); // مودال
  let closeModalBtn = modal.querySelector(".close"); // دکمه بستن مودال

  // اضافه کردن event listener برای دکمه باز کردن مودال
  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  // اضافه کردن event listener برای دکمه بستن مودال
  closeModalBtn.addEventListener("click", closeModal);

  // اضافه کردن event listener برای پایان انیمیشن بسته شدن مودال
  modal.addEventListener("animationend", function (event) {
    if (event.animationName === "fadeOut") {
      // اگر انیمیشن خروج از دید انجام شود، مودال را مخفی کنید و انیمیشن‌ها را حذف کنید
      modal.style.display = "none";
      modal.style.animation = "";
      modal.querySelector(".modal-content").style.animation = "";
    }
  });

  // تعریف تابع برای بستن مودال
  function closeModal() {
    // اعمال انیمیشن خروج مودال
    modal.style.animation = "fadeOut 0.5s ease";
    modal.querySelector(".modal-content").style.animation =
      "slideOut 0.5s ease";

    // تاخیر برای حذف مودال پس از پایان انیمیشن
    setTimeout(function () {
      modal.style.display = "none";
      modal.style.animation = "";
      modal.querySelector(".modal-content").style.animation = "";
    }, 500);
  }
});

// تابع برای تغییر وضعیت منو
function toggleMenu() {
  let menuBody = document.getElementById("myMenu");
  menuBody.classList.toggle("active");
}
