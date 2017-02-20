angular.module('app')
    .constant('FirebaseUrl', 'https://expensetracker-882f6.firebaseio.com/')
    .service('rootRef', ['FirebaseUrl', firebase]);

