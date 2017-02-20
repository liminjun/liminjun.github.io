angular.module('app').component('categoryList', {
    templateUrl: 'categories/categories.html',
    bindings:{
        categories:'='
    },
    controller: function ($firebaseObject, fbRef) {
        var ctrl=this;

        ctrl.createNewCategory=function(){
            ctrl.categories.$add({name:ctrl.newCategoryName});
            ctrl.newCategoryName='';
        }
    }
});