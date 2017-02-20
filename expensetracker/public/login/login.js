angular.module('app').component('login', {
    templateUrl: "login/login.html",
    bindings: {
        currentAuth: '='
    },
    controller: function (auth, $location) {

        var ctrl = this;
        ctrl.loggedIn = !!ctrl.currentAuth;

        ctrl.anonLogin = function () {
            auth.$authAnonymously()
                .then(function () {
                    $location.path('/home');
                })
                .catch(function (error) {
                    ctrl.errorMessage = error.code;
                });
        };
        ctrl.googlePlusLogin = function () {
            auth.$authWithOAuthPopup('google')
                .then(function () {
                    $location.path('/home');
                })
                .catch(function (error) {
                    ctrl.errorMessage = error.code;
                });
        };

        ctrl.twitterLogin = function () {
            auth.$authWithOAuthPopup('twitter')
                .then(function () {
                    $location.path('/home');
                })
                .catch(function (error) {
                    ctrl.errorMessage = error.code;
                });
        };

        ctrl.fbLogin = function () {
            auth.$authWithOAuthPopup('facebook')
                .then(function () {
                    $location.path('/home');
                })
                .catch(function (error) {
                    ctrl.errorMessage = error.code;
                });
        };


        ctrl.githubLogin = function () {   
            var auth = firebase.auth();     
            var provider = new firebase.auth.GithubAuthProvider();

            auth.signInWithPopup(provider).then(function (result) {
                // User signed in!
                var uid = result.user.uid;
                $location.path('/home');
            }).catch(function (error) {
                // An error occurred
                debugger;
                ctrl.errorMessage = error.code;
            });

            // auth.$authWithOAuthPopup('github')
            //     .then(function () {
            //         $location.path('/home');
            //     })
            //     .catch(function (error) {
            //         ctrl.errorMessage = error.code;
            //     });
        }


    }
});