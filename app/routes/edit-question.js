import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id)
    });
  },

  actions: {
    updateQuestion: function(question, params) {
      var questionParams = {
        query: this.get('query'),
        notes: this.get('notes'),
        author: this.get('author')
      };

      Object.keys(questionParams).forEach(function(key) {
        if(questionParams[key]!==undefined) {
          question.set(key,questionParams[key]);
        }
      });

      question.save();
    }
  }
});
