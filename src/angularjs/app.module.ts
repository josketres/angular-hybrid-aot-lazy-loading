export const ng1App: any = angular.module('ng1App', []);

ng1App.component('home', {
    template: '<h1>{{$ctrl.message}}</h1>',
    controller: function () {
        this.message = 'Hello from angular 1';
    }
});


