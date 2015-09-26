import Ember from 'ember';

export default Ember.Component.extend({
  addAnswerForm: false,

  actions: {
    showAnswerForm: function() {
      this.set('addAnswerForm', true);
    },
    hideAnswerForm: function() {
      this.set('addAnswerForm', false);
    },
    addAnswer: function(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author') ? this.get('author') : 'Anonymous',
        question: question,
        date: new Date()
      };
      
      this.sendAction('addAnswer', params);
      this.set('addAnswerForm', false);
    }
  }
});
