export const ng1App: any = angular.module('ng1App', []);

ng1App.component('header', {
    template: '<div class="ng1-header">{{$ctrl.message}}</div>',
    controller: function () {
        this.message = 'Angular 1 header';
    }
});


