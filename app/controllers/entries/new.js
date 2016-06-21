import Ember from 'ember';

export default Ember.Controller.extend({
  allDiagnoses: Ember.computed(function(){
    return this.store.findAll('diagnosis');
  }),

  actions: {
    save(){
      let entry = this.get('model');
      debugger;
      entry.set('diagnosis', this.get('selection'));
      entry.set('value', this.get('value'))
      entry.save();
    }
  }
});
