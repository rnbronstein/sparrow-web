import Ember from 'ember';
export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  timeSeriesData: Ember.computed.reads('applicationController.timeSeriesData')
 });
