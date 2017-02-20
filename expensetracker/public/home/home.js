angular.module('app').component('home',{
    templateUrl:'home/home.html',
    bindings:{
        expensesInOrder:'=',
        categories:'='
    },
    controller:function(rootRef){
     

        this.createExpense=function(expenseData){
            this.expensesInOrder.$add(expenseData);
        };

        this.editExpense=function(expense){
            this.editedExpense=expense;
        };
        this.updateExpense=function(){
            this.expensesInOrder.$save(this.editedExpense);
        }
    }
});