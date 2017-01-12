var app = angular.module("myApp", []);

app.controller('ToReadController', ['$scope', function ($scope) {

    $scope.bookList = [
        {title: 'titlu', author: 'autor', pagesRead: 0, totalPages: 500, startDate: new Date(2016, 10, 15)},
        {title: 'titlu', author: 'autor', pagesRead: 0, totalPages: 500, startDate: new Date(2016, 10, 15)},
        {title: 'titlu', author: 'autor', pagesRead: 0, totalPages: 500, startDate: new Date(2016, 10, 15)}
    ];

//    $scope.newBook = {};
//
//    $scope.saveBook = function()  {
//        $scope.bookList.push($scope.newBook);
//        $scope.newBook = {};
//    };

    $scope.addBook = function () {
        $scope.bookList.push({
            title: $scope.titleInput,
            author: $scope.authorInput,
            pagesRead: 0,
            totalPages: $scope.totalPagesInput,
            startDate: $scope.startDateInput
        });

        $scope.titleInput = "";
        $scope.authorInput = "";
        $scope.totalPagesInput = "";
        $scope.startDateInput = new Date();

        $scope.message = "New Book Added"
    };
    
    $scope.addPages = function (index) {
        if ($scope.bookList[index].pagesRead < $scope.bookList[index].totalPages) {
            $scope.bookList[index].pagesRead += 1;
        }
    };

    //$scope.newBook = {};
    //$scope.clickedBook = {};

    $scope.selectBook = function(book) {
        $scope.newBook = book;
    };

    $scope.updateBook = function() {
         $scope.message = "Book Updated"
    }

    $scope.deleteBook = function() {
        $scope.bookList.splice($scope.bookList.indexOf($scope.newBook), 1);
         $scope.message = "Book Deleted"
    };

    //$scope.message = ""

    $scope.clearMessage = function() {
            $scope.message = ""
    }

//    $scope.removeBook = function () {
//        var oldBookList = $scope.bookList;
//        $scope.bookList = [];
//        angular.forEach(oldBookList, function (book) {
//            if (!book.done) $scope.bookList.push(book);
//        });
//    };

}]);
