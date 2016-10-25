/**
 * Created by Megha Nagabhushan on 10/23/2016.
 */

'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
.controller('topVideosCtrl', function($scope, $http){
    $scope.videos = [];
    $scope.information = [];
    $scope.videoSearch =function () {
        var queryKeyword = document.getElementById("queryName").value;
        $scope.youtubeParams = {
            key: 'AIzaSyDpyT6qTD9Ql3WcG62wYkjqLdq9IRpmPrA',
            // q:encodeURIComponent(document.getElementById("queryName").value).replace(/%20/g,'+'),
            type: 'video',
            maxResults: '6',
            part: 'snippet',
            q:queryKeyword,
            order: 'viewCount',
            channelId: 'UCeI5UUTe_3kIVNxDqgcnFEg',
        }

        $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='+queryKeyword+'&type=video&key=AIzaSyDpyT6qTD9Ql3WcG62wYkjqLdq9IRpmPrA').success(function(response){
            angular.forEach(response.items, function(child){
                // console.log (child);
                $scope.videos.push(child);
            });
        });
    }

     $scope.infoSearch = function($scope, $http) {
         var searchTerm = document.getElementById("queryName").value;
         var handler =  $http.get('http://www.omdbapi.com/?t='+searchTerm+'&tomatoes=true&plot=full');
         handler.success(function (result) {
             $scope.movietitle = result.Title;
             $scope.movieplot = result.Plot;
             $scope.movieactors = result.Actors;
             document.getElementById('div_movieList').style.display = 'block';
         })


            }



})
