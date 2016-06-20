import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  timeSeriesData: Ember.computed.reads('applicationController.timeSeriesData'),
  interval: 'H',
  fromZero: true,
  color: 'rgb(111, 58, 76)',
  xAxisTitle: true,
  yAxisTitle: true,
  xDisplayName: 'Time',
  yDisplayName: 'Pain Level'
 });
