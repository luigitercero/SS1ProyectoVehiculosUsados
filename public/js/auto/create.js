"use strict";

var URL = "http://localhost:3000/";


(function () {
    var app = angular.module("app", ["firebase"]);

    app.controller("ctrl", function ($scope, $firebaseArray, $firebaseObject) {

        $scope.car;
        $scope.createCar=function() {
            console.log("crear Carro");
            var xhr = new XMLHttpRequest();
            var url = URL + "createcar";
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    location.reload();
                }
            
            };
            var userToUpdate = {};
            
            userToUpdate.line = $scope.car.line;
            userToUpdate.model = $scope.car.model;
            userToUpdate.description = $scope.car.description;
            userToUpdate.marca = $scope.car.marca;
            console.log(userToUpdate);

            var data = JSON.stringify(userToUpdate);
            xhr.send(data);
        }
        // LUIS
        $(document).ready(function () {
            $('.collapsible').collapsible();
            $('.sidenav').sidenav();
            $('.tabs').tabs();
        });
    });
})()

