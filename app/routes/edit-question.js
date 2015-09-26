import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id)
    });
  },

  actions: {
    updateQuestion: function(question) {
      var params = {
        query: this.get('query'),
        notes: this.get('notes'),
        author: this.get('author')
      };

      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });

      question.save();
    }
  }
});
