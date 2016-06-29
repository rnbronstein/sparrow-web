import Ember from 'ember';

export default Ember.Controller.extend({
  allDiagnoses: Ember.computed(function(){
    return this.store.findAll('diagnosis');
  }),

  actions: {
    save(){
      let entry = this.get('model');
      entry.set('diagnosis', this.get('value'));
      debugger
      entry.set('value', this.get('entryValue'))
      entry.save();
    }
  }
});
