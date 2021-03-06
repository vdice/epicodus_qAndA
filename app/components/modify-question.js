import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  actions: {
    deleteQuestion: function(question) {
      if(confirm('Are you sure you want to delete this post?')) {
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});
