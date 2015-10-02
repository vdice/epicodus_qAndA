import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  actions: {
    upVote(answer) {
      var upVotes = answer.get('upVotes');
      answer.set('upVotes', upVotes + 1);
      answer.save();
    },
    downVote(answer) {
      var upVotes = answer.get('upVotes');
      answer.set('upVotes', upVotes - 1);
      answer.save();
    }
  }
});
