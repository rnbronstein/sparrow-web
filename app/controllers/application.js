import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  sessionAccount: Ember.inject.service('session-account'),
  ajax: Ember.inject.service(),
  init: function() {
    this._super;
    this.get('ajax').request('visualization').then((response)=>{
      console.log(response);
      var dummyData = [
	{
		"label": "Group One",
		"time": "2013-05-01T04:00:00.000Z",
		"value": 63642.83058384
	},
	{
		"label": "Group One",
		"time": "2013-05-02T04:00:00.000Z",
		"value": 63682.88915361
	},
	{
		"label": "Group One",
		"time": "2013-05-03T04:00:00.000Z",
		"value": 64073.26541992
	},
	{
		"label": "Group One",
		"time": "2013-05-04T04:00:00.000Z",
		"value": 63960.89079724
	},
	{
		"label": "Group One",
		"time": "2013-05-05T04:00:00.000Z",
		"value": 63830.11730889
	},
	{
		"label": "Group One",
		"time": "2013-05-06T04:00:00.000Z",
		"value": 63836.09425964
	},
	{
		"label": "Group One",
		"time": "2013-05-07T04:00:00.000Z",
		"value": 63836.98702062
	},
	{
		"label": "Group One",
		"time": "2013-05-08T04:00:00.000Z",
		"value": 63810.160309985
	},
	{
		"label": "Group One",
		"time": "2013-05-09T04:00:00.000Z",
		"value": 63845.01459874
	},
	{
		"label": "Group One",
		"time": "2013-05-10T04:00:00.000Z",
		"value": 63834.58089744
	},
	{
		"label": "Group One",
		"time": "2013-05-11T04:00:00.000Z",
		"value": 63946.88897166
	},
	{
		"label": "Group One",
		"time": "2013-05-12T04:00:00.000Z",
		"value": 64008.05339702
	},
	{
		"label": "Group One",
		"time": "2013-05-13T04:00:00.000Z",
		"value": 64002.03240921
	},
	{
		"label": "Group One",
		"time": "2013-05-14T04:00:00.000Z",
		"value": 64002.92517018
	},
	{
		"label": "Group One",
		"time": "2013-05-15T04:00:00.000Z",
		"value": 63883.751494944
	},
	{
		"label": "Group One",
		"time": "2013-05-16T04:00:00.000Z",
		"value": 63787.478592515
	},
	{
		"label": "Group One",
		"time": "2013-05-17T04:00:00.000Z",
		"value": 63800.91393495
	},
	{
		"label": "Group One",
		"time": "2013-05-18T04:00:00.000Z",
		"value": 63847.45659791
	},
	{
		"label": "Group One",
		"time": "2013-05-19T04:00:00.000Z",
		"value": 63806.06566759
	},
	{
		"label": "Group One",
		"time": "2013-05-20T04:00:00.000Z",
		"value": 63761.361287594
	},
	{
		"label": "Group One",
		"time": "2013-05-21T04:00:00.000Z",
		"value": 63760.77428893
	},
	{
		"label": "Group One",
		"time": "2013-05-22T04:00:00.000Z",
		"value": 63753.75257796
	},
	{
		"label": "Group One",
		"time": "2013-05-23T04:00:00.000Z",
		"value": 63797.0534512
	},
	{
		"label": "Group One",
		"time": "2013-05-24T04:00:00.000Z",
		"value": 63903.166108675
	}
      ]
      this.set('timeSeriesData', dummyData);
    });
  }
});
