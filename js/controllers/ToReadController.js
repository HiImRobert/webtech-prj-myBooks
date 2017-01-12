var app = angular.module("myApp", []);

app.controller('ToReadController', ['$scope', function ($scope) {

    $scope.bookList = [
        {title: 'Ends and Means', author: 'Aldous Huxley', pagesRead: 88, totalPages: 330, done: false, startDate: new Date(2016, 10, 15)}
    ];

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
    };
    
    $scope.addPages = function (index) {
        if ($scope.bookList[index].pagesRead < $scope.bookList[index].totalPages) {
            $scope.bookList[index].pagesRead += 1;
        }
    };

    $scope.removeBook = function () {
        var oldBookList = $scope.bookList;
        $scope.bookList = [];
        angular.forEach(oldBookList, function (book) {
            if (!book.done) $scope.bookList.push(book);
        });
    };

}]);
