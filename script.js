document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  // ไม่จำกัดชื่อผู้ใช้และรหัสผ่าน แต่ยังคงเก็บข้อมูลเข้าสู่ระบบ
  if (email && password) {
    localStorage.setItem("loggedInUser", email);
    window.location.href = "music.html";  // เปลี่ยนไปยังหน้า music.html
  } else {
    alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่านให้ครบถ้วน");
  }
});
