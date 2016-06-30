var app=angular.module('app',['ui.router','oc.lazyLoad']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/list');

    $stateProvider
        .state('detail',{
            url:"/detail/:bookId",
            templateUrl:"/templates/detail.html",
            controller:"DetailController",
            controllerAs:'ctrl',
            resolve:{
                load:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        'services/dataService.js'
                        ]);
                }],
                currentBook:['$ocLazyLoad','$stateParams','$injector',function($ocLazyLoad,$stateParams,$injector){
                    var bookId=$stateParams.bookId;
                    return $ocLazyLoad.load('services/booksService.js').then(function(){
                        return $injector.get('booksService').getBookById(bookId);;
                    });

                }]
            }
        })
        .state('list',{
            url:"/list",
            templateUrl:"/templates/list.html",
            controller:"ListController",
            controllerAs:"ctrl",
            resolve:{
                load:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        'services/dataService.js',
                        'services/booksService.js'
                        ]);
                }]
            }
        });
});