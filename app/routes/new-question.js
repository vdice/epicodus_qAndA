import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveQuestion: function(params) {
      if (params.query) {
        var newQuestion = this.store.createRecord('question', params);
        newQuestion.save();
      }
      this.transitionTo('index');
    }
  }
});
