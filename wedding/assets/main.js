var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', 'appService', function ($scope, appService) {
    var vm = this;

    


    vm.audioClick = function () {
        var audioObj = document.getElementById("music");

        if (audioObj.paused) {
            audioObj.play();
            $("#audio_btn").addClass("rotate");
        } else {
            $("#audio_btn").removeClass("rotate");
            audioObj.pause();
        }
    };

    vm.audioClick();
    
    vm.getMessageList = function () {
        appService.getMessageList()
            .success(function (response) {
                vm.messages = response;
            })
            .error(function (error) {
                console.log("获取祝福语列表失败:" + error);
            });
    };

    vm.getMessageList();

    var custommodal = $('[data-remodal-id=modal]').remodal();

    vm.showDialog = function () {
        custommodal.open();
    };

    $(document).on('confirmation', '.remodal', function () {
        console.log('Confirmation button is clicked');
        vm.createMessage();
    });

    vm.createMessage = function () {
        var messageId = Date.now();
        var nickname = vm.nickname;
        var message = vm.message;

        appService.createMessage(messageId, nickname, message)
            .success(function (response) {
                if (response) {
                    toastr.success("祝福成功");
                    vm.getMessageList();
                    var nickname = "";
                    var message = "";
                } else {
                    toastr.warning("程序出了问题，请重试");
                }
            })
            .error(function (error) {
                toastr.error("获取祝福语列表失败:" + error);
            });
    };



}]);