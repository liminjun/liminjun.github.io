angular.module('app').controller('ListController',['booksService',function(booksService){
    var vm=this;
    booksService.getAllBooks()
        .then(function(response){
            
            vm.books=response;
        },function(error){
            console.log(error);
        });
}]);