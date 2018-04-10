export const ng1App: any = angular.module('ng1App', []);

ng1App.component('header', {
    template: '<div style="border: 3px solid red;padding: 3px;">{{$ctrl.message}}</div>',
    controller: function () {
        this.message = 'Angular 1 header';
    }
});


