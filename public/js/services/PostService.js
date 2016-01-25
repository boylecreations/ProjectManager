// public/js/services/PostService.js
angular.module('PostService', []).factory('Post', ['$http', function($http) {

    return {
        // call to get all posts
        get : function() {
            return $http.get('http://boylecreations.com/wp-json/wp/v2/posts');
        }
    }

}]);
