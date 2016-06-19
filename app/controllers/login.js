// import Ember from 'ember';
//
// export default Ember.Controller.extend({
//   actions: {
//     authenticate: function() {
//       var credentials = this.getProperties('identification', 'password'),
//         authenticator = 'authenticator:jwt';
//       this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
//         this.set('errorMessage', [{detail: "incorrect email or password"}]);
//       });
//     }
//   }
// });

import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function(credentials) {
      var authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
