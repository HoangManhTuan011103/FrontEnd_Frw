window.addEventListener('scroll' , () => {
    const menuHelp = document.querySelector('.menu__help');
    const menuMain = document.querySelector('.menu__main')
    menuHelp.classList.toggle('hiddenMenuHelp', window.scrollY > 0);
    menuMain.classList.toggle('mt-3', window.scrollY == 0);
});
// window.addEventListener('load', (event) => {
//     let myAleart = document.querySelector('.toast');
//     let bsAleart = new bootstrap.Toast(myAleart);
//     bsAleart.show();
// });
// var app = angular.module("myApp", ["ngRoute"]);
// app.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//       templateUrl : "main.html"
//     })
//     .when("/red", {
//       templateUrl : "red.html"
//     })
//     .when("/green", {
//       templateUrl : "green.html"
//     })
//     .when("/blue", {
//       templateUrl : "blue.html"
//     });
//   });