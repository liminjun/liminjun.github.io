angular.module('app').factory('auth',['$firebaseAuth','firebase',function($firebaseAuth,firebase){
    return $firebaseAuth(firebase.auth());
}]);