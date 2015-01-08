'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAngularApp
 */
angular.module('yeomanAngularApp')

  .controller('MainCtrl', function ($scope,$timeout) {
  	var rootRef = new Firebase('https://aplication.firebaseio.com/');
  	
    var usersRef = rootRef.child('user');
    var messageRef = rootRef.child('massage');

    $scope.nombre = null;
    $scope.apellido = null;
    $scope.telefono = null;
    $scope.extencion = null;
    $scope.empresa = null;
    $scope.messages = [];
   /* 
    messageRef.on('child_added', function(snapshot){
      $timeout(function(){
        var snapshotVal = snapshot.val();
        console.log(snapshotVal);
        $scope.messages.push({
          text: snapshotVal.text,
          user: snapshotVal.user,
          name: snapshot.key()
        });
      });
    });

    messageRef.on('child_changed', function(snapshot){
      $timeout(function(){
        //var snapshotVal = snapshot.val();
        console.log(snapshot.key());
      });
    });
*/
    usersRef.on('value', function(snapshot){
      $timeout(function(){
        var snapshotVal = snapshot.val();
        //console.log(snapshot.key());
        $scope.users = snapshotVal;
      });
    });


    usersRef.on('child_added', function(snapshot){
      $timeout(function(){
        var snapshotVal = snapshot.val();
        console.log(snapshotVal);
        $scope.messages.push({
          Nombre: snapshotVal.Nombre,
          Telefono: snapshotVal.Telefono,
          Extencion: snapshotVal.Extencion,
          name: snapshot.key()
        });
      });
    });

    usersRef.on('child_changed', function(snapshot){
      $timeout(function(){
        //var snapshotVal = snapshot.val();
        console.log(snapshot.key());
      });
    });

    $scope.addUser = function(){
      var newUser = {
        Nombre: $scope.nombre,
        Apellido: $scope.apellido,
        Telefono: $scope.telefono,
        Extencion: $scope.extencion,
        Empresa: $scope.empresa
      }
      $scope.nombre = null;
      $scope.apellido = null;
      $scope.telefono = null;
      $scope.extencion = null;
      $scope.empresa = null;

      usersRef.push(newUser)
    }


/*
    $scope.$watch('message.text' , function(text){
      if (!text) {
        return;
      }
      messageRef.update({
        text: text
      });
    });

  	$scope.setMessage = function(){
  		messageRef.set({
  			user: 'Bob',
  			text: 'Hi',
        lastName:'alfaro'
  		});
  	}

  	$scope.updateMessage = function(){
  		messageRef.update({
  			lastName:'Alfaro'
  		});
  	}

  	$scope.deleteMessage = function(){
  		messageRef.remove();

  	}
  */  

  });
