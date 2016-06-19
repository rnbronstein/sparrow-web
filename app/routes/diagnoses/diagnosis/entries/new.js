import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let diagnosis = this.modelFor('diagnoses.diagnosis');
    return this.store.createRecord('entry', { diagnosis: diagnosis });
  },
  actions: {
    save(entry){
      entry.save().then(alert("saved"));
    }
  }
});


// let diagnosis = this.modelFor('diagnosis.diagnois')
// this.store.creatRecord('entry', { diagnosis: diagnosis})
