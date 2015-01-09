'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAngularApp
 */

angular.module('yeomanAngularApp')



  //app.controller("SampleCtrl", ["$scope", "$firebase",function($scope, $firebase) {

  .controller('MainCtrl', function ($scope,$timeout,$location,$firebase) {
  	var rootRef = new Firebase('https://aplication.firebaseio.com/');
  	
    //var ref = new Firebase("https://blinding-heat-3001.firebaseio.com//data");
    var usersRef = rootRef.child('user');
    var sync = $firebase(usersRef);
    $scope.users = sync.$asArray();

    
    var messageRef = rootRef.child('massage');
    $('.show-from-user').toggle(700);

    $scope.nombre = null;
    $scope.apellido = null;
    $scope.telefono = null;
    $scope.extencion = null;
    $scope.empresa = null;

    usersRef.on('value', function(snapshot){
      $timeout(function(){
        
      });
    });

    usersRef.on('child_changed', function(snapshot){
      $timeout(function(){
        $scope.users = sync.$asArray();
      });
    });

    $scope.addUser = function(){
     
      var newUser = {
        nombre: $scope.nombre,
        apellido: $scope.apellido,
        telefono: $scope.telefono,
        extencion: $scope.extencion,
        empresa: $scope.empresa,
        valor: false
      };
      $scope.nombre = null;
      $scope.apellido = null;
      $scope.telefono = null;
      $scope.extencion = null;
      $scope.empresa = null;

      usersRef.push(newUser);
      $location.url("home");
    };

    $scope.cancelar = function(){

      $('.from-user').toggle(700);
      alert(usersRef);
    };

});    
