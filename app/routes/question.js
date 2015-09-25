import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id)
    });
  },

  actions: {
    deleteQuestion: function(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
