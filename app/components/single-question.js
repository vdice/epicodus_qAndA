import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuestion: function(question) {
      this.sendAction('deleteQuestion', question);
    },
    addAnswer: function(params) {
      this.sendAction('addAnswer', params);
    }
  }
});
