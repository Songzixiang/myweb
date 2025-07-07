// 轮播图功能
let current = 0;
const items = document.querySelectorAll('.carousel-item');
setInterval(() => {
  items[current].classList.remove('active');
  current = (current + 1) % items.length;
  items[current].classList.add('active');
}, 3000);

// 表单验证
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  if (!name) {
    msg.textContent = '请输入姓名';
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    msg.textContent = '请输入有效邮箱';
    return;
  }
  msg.style.color = '#00a1d6';
  msg.textContent = '提交成功！';
  form.reset();
  setTimeout(() => {
    msg.textContent = '';
  }, 2000);
});