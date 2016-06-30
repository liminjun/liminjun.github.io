angular.module('app').factory('booksService', function ($q, $timeout) {
    var books = [
        {
            id: 1,
            name: "用AngularJS开发下一代Web应用",
            price: 55,
            cover: "https://img3.doubanio.com/mpic/s28011614.jpg"
        },
        {
            id: 2,
            name: "AngularJS权威教程",
            price: 99,
            cover: "https://img3.doubanio.com/mpic/s27371732.jpg"
        }
    ];

    return {
        getBookById: function (bookId) {
            var book=null;
            for (var i = 0; i < books.length; i++) {
                if (books[i].id == bookId) {
                    book = books[i];
                }
            }
            return book;
        },
        getAllBooks: function () {
            var deferred = $q.defer();


            deferred.resolve(books);
            $timeout(function () {

            }, 3000);
            return deferred.promise;
        }
    }
})