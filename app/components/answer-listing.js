import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['upVotes:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortBy')
});
