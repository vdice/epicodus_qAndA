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
    },
    addAnswer: function(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      params.question.save();
      this.transitionTo('question', params.question.id)
    }
  }
});
