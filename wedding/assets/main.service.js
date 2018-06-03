app.factory('appService',['$http',function($http){
    var AppConfig="."
    return{
        //获取祝福列表
        getMessageList: function(){
            return $http({
                //url:AppConfig + "/api/messages",
                url:"/data/wish.list.json",
                method:"GET"
            });
        },
        //创建祝福
        createMessage: function(messageId,nickname,message){
            return $http({
                url:AppConfig + "/api/message/"+messageId,
                method:"POST",
                data:{
                    nickname:nickname,
                    message:message
                }
            });
        },
       
    };
}]);