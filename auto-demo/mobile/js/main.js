window.onload = function(){
    //低价购车
      $(".nav-category").find("a").not(".all").click(function(){
         var bannerHeight= $("header").height();
         var index = $(this).parent().index();
         document.body.scrollTop = bannerHeight ;
        if(!$(".navigation").hasClass("on")){
             $(".navigation").addClass("on");
        }
        if($(this).find("i").hasClass("active")){
            $("body,html").removeClass("overHid");
            $(".nav-category").find("i").removeClass("active");
            $(".nav-content").hide();
        }else{
            $(".nav-category").find("i").removeClass("active");
            $(this).find("i").addClass("active");
            $("body,html").addClass("overHid");
            $(".nav-content").show();
            $(".category-item").hide();
            $(".category-item").eq(index-1).show(300);
        }
        return false;
    });
    
    $(document).scroll(function(){
        if(document.body.scrollTop< $("header").height()){
            $(".navigation").removeClass("on");
        }else{
             $(".navigation").addClass("on");
        }
    });
}