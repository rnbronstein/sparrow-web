import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('entry');
  },
  actions: {
    save(entry){
      entry.save()
    }
  }
});
