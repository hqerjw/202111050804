$(document).ready(function() {
    // 多级菜单功能
    $('#menu ul').hide(); // 隐藏所有子菜单
    $('#menu li').click(function(e) {
      e.stopPropagation(); // 阻止事件冒泡
      $(this).children('ul').slideToggle(); // 切换当前子菜单的显示状态
      $(this).siblings().children('ul').slideUp(); // 收起其他子菜单
    });
  });
  