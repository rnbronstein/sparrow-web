import Ember from 'ember';

export default Ember.Component.extend({
  doubleClick: function() {
    this.toggleProperty('isEditing');
  },
  actions: {
    save() {
      this.toggleProperty('isEditing');
      this.attrs.saveDiagnosisChanges(this.get('diagnosis'));
    }
  },
  isEditing: false
});