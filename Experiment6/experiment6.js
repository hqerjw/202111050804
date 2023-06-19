function initializePage() {
    // 1. 网页动态初始化
    var currentTime = new Date();
    document.getElementById('currentTime').textContent = 'Current Time: ' + currentTime.toLocaleTimeString();
  
    var data = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 28 }
    ];
  
    var table = document.getElementById('dataTable');
    for (var i = 0; i < data.length; i++) {
      var row = table.insertRow();
      var cell1 = row.insertCell();
      var cell2 = row.insertCell();
      cell1.textContent = data[i].name;
      cell2.textContent = data[i].age;
    }
  }
  
  function showAlert() {
    // 2. 提交按钮事件
    alert('Button clicked!');
  }
  
  function toggleVisibility(elementId) {
    // 3. 隐藏/显示元素
    var element = document.getElementById(elementId);
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
  
  function showCoordinates(event) {
    // 4. 鼠标移动事件
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById('mouseCoordinates').textContent = 'Coordinates: (' + x + ', ' + y + ')';
  }
  
  function addItem() {
    // 5. 添加元素
    var list = document.getElementById('list');
    var newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    list.appendChild(newItem);
  }
  
  function removeItem() {
    // 5. 删除元素
    var list = document.getElementById('list');
    if (list.children.length > 0) {
      list.removeChild(list.lastElementChild);
    }
  }
  