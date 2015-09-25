import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortBy')
});
