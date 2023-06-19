function validateForm(event) {
    event.preventDefault(); // 阻止表单默认提交行为
  
    var nameInput = document.getElementById('name');
    var ageInput = document.getElementById('age');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');
    var errorMessage = document.getElementById('errorMessage');
    
    // 验证非空和长度限制
    if (nameInput.value.trim() === '') {
      errorMessage.textContent = '请输入姓名';
      nameInput.focus();
      return;
    }
  
    if (ageInput.value.trim() === '') {
      errorMessage.textContent = '请输入年龄';
      ageInput.focus();
      return;
    }
  
    if (parseInt(ageInput.value) < 18 || parseInt(ageInput.value) > 99) {
      errorMessage.textContent = '年龄必须在18到99之间';
      ageInput.focus();
      return;
    }
  
    // 验证电话号码
    var phonePattern = /^1[0-9]{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
      errorMessage.textContent = '请输入有效的电话号码';
      phoneInput.focus();
      return;
    }
  
    // 验证邮箱地址
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(emailInput.value)) {
      errorMessage.textContent = '请输入有效的邮箱地址';
      emailInput.focus();
      return;
    }
  
    // 通过验证
    errorMessage.textContent = '';
    alert('表单验证通过！');
  }
  