angular.module('app').controller('DetailController', ['$stateParams', 'currentBook', 'dataService', function ($stateParams, currentBook, dataService) {
    var vm = this;
    var bookId = $stateParams.bookId;

    vm.appName = dataService.APP_TITLE;

    vm.book = currentBook;
    // booksService.getAllBooks()
    //     .then(function(response){

    //         for(var i=0;i<response.length;i++){
    //             if(response[i].id==bookId){
    //                 vm.book=response[i];
    //             }
    //         }

    //     },function(error){
    //         console.log(error);
    //     });
}])