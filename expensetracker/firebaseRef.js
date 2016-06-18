angular.module('app').factory('fbRef',function(rootRef,auth){
    return {
        getPreferencesRef:function(){
            return rootRef.child('preferences').child(auth.$getAuth().uid);
        },
        getCategoriesRef:function(){
            return rootRef.child('categories');
        },
        getExpensesRef:function(){
            return rootRef.child('expenses').child(auth.$getAuth().uid);
        }
    }
});