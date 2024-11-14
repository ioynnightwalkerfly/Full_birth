// scripts/index.js
function openEnvelope() {
  // เริ่มแอนิเมชันแล้วเปลี่ยนไปยัง flower.html หลังจากแอนิเมชันจบ
  document.querySelector('.envelope').classList.add('open');
  setTimeout(() => window.location.href = "flower.html", 1000);
}
