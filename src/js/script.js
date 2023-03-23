window.addEventListener('scroll' , () => {
    const menuHelp = document.querySelector('.menu__help');
    const menuMain = document.querySelector('.menu__main')
    menuHelp.classList.toggle('hiddenMenuHelp', window.scrollY > 0);
    menuMain.classList.toggle('mt-3', window.scrollY == 0);
});
angular.module('myApp', ['ngRoute']).config(($routeProvider) => {
    $routeProvider
    .when('/', {
        templateUrl: 'views/Home.html',
        controller: HomeController
    })
    .when('/sale', {
        templateUrl: 'views/Sale.html',
        controller: SaleController
    })
    .when('/ticket', {
        templateUrl: 'views/Ticket.html',
        controller: TicketController
    })
    .when('/contact', {
        templateUrl: 'views/Contact.html',
        controller: TicketController
    })
    .when('/club', {
        templateUrl: 'views/Club.html',
        controller: ClubController
    })
    .when('/trip', {
        templateUrl: 'views/Trip.html',
        controller: TripController
    })
});