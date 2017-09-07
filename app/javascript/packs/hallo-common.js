ManageIQ.angular.app.component('hello', {
  controller: ['$timeout', function($timeout) {

    ManageIQ.angular.rxSubject.subscribe((event) => {

      var eventType = event.type;

      console.debug(event);

      if (eventType === 'demo') {
        $timeout(() => this.message = 'je tu');
      }
    });
  }],
  template: `
    <i>{{$ctrl.message}}</i>
  `
});
