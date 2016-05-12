$(document).ready(function(){
  //左侧菜单伸缩显示
  $(".vip-sidebar-item").children("a").click(function(){
     // alert($(this).next(".sidebar-list").attr("class"));
     $(this).next(".sidebar-list").toggle();
  });
  //tab切换
  $(".vip-tab-title").find("li").click(function(){
      $(this).addClass("active").siblings("li").removeClass("active");
  });
  var al = $(".vip-tab-title").find("li")
  var len = $(".vip-tab-title").find("li").length;
  for( var i=0; i<len; i++){
      (function(k){
          $(al[i]).click(function(){
             $(".tab-content-item:eq("+k+")").addClass("active").siblings(".tab-content-item").removeClass("active");
          });
      })(i)
  }
});
