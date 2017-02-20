angular.module('app').component('logout',{
    controller:function(auth,$location){
        //auth.$unauth();
        auth.$signOut();
        $location.path("/login");
    }
});