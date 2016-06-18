'use strict';

var app = angular.module('app', ['ngRoute', 'firebase']);

app.run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (e, next, prev, err) {
        if (err === "AUTH_REQUIRED") {
            $location.path("/login");
        }
    });
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            template: "<home categories='$resolve.categories' expenses-in-order='$resolve.expensesInOrder'></home>",
            resolve: {
                expensesInOrder: function (fbRef, expenseList, auth) {
                    return auth.$requireAuth().then(function () {
                        var query=fbRef.getExpensesRef().orderByChild('date');
                        return expenseList(query).$loaded();
                    });
                },
                categories: function (fbRef, $firebaseArray, auth) {
                    return auth.$requireAuth().then(function () {
                        var query=fbRef.getCategoriesRef().orderByChild('name');
                        return $firebaseArray(query).$loaded();
                    });
                }
            }
        })
        .when('/userpref', {
            template: "<edit-user-pref user-preferences='$resolve.userPreferences'></edit-user-pref>",
            resolve: {
                userPreferences: function (fbRef, $firebaseObject, auth) {
                    return auth.$requireAuth().then(function () {
                        return $firebaseObject(fbRef.getPreferencesRef()).$loaded();
                    });
                }
            }
        })
        .when('/categories', {
            template: "<category-list categories='$resolve.categories'></category-list>",
            resolve: {
                categories: function (fbRef, $firebaseArray, auth) {
                    return auth.$requireAuth().then(function () {
                        var query=fbRef.getCategoriesRef().orderByChild('name');
                        return $firebaseArray(query).$loaded();
                    });
                }
            }
        })
        .when('/login', {
            template: '<login current-auth="$resolve.currentAuth"></login>',
            resolve: {
                currentAuth: function (auth) {
                    return auth.$waitForAuth();
                }
            }
        })
        .when('/logout', {
            template: '<logout></logout>'
        })
        .otherwise('/home');
});