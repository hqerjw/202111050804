function experiment5() {
    // 1. 显示当前日期和剩余天数
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // 月份从0开始，需要加1
    var day = currentDate.getDate();
    var weekday = getWeekday(currentDate.getDay());
    var holidayDate = new Date(year, 6, 16); // 放假日期为7月16日
    var daysToHoliday = Math.ceil((holidayDate - currentDate) / (1000 * 60 * 60 * 24)); // 计算剩余天数
  
    document.getElementById('currentDate').textContent = '当前日期：' + year + '年' + month + '月' + day + '日，' + weekday;
    document.getElementById('daysToHoliday').textContent = '距离放假还有：' + daysToHoliday + '天';
  
    // 2. 字符串数组排序
    var students = ['Alice', 'Bob', 'Charlie', 'David'];
    students.sort(); // 默认按字母顺序排序
    document.getElementById('sortedArray').textContent = '排序后的学生姓名列表：' + students.join(', ');
  
    // 3. 自定义对象
    function Car(color, type, price) {
      this.color = color;
      this.type = type;
      this.price = price;
    }
  
    Car.prototype.start = function() {
      return '启动汽车';
    }
  
    Car.prototype.stop = function() {
      return '停止汽车';
    }
  
    var myCar = new Car('红色', '轿车', 20000);
    document.getElementById('carInfo').textContent = '我的汽车信息：颜色：' + myCar.color + '，类型：' + myCar.type + '，价格：' + myCar.price + '元';
    console.log(myCar.start()); // 控制台输出："启动汽车"
    console.log(myCar.stop()); // 控制台输出："停止汽车"
  }
  
  function getWeekday(day) {
    var weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return weekdays[day];
  }
  