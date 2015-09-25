import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,

  actions: {
    queryShow() {
      this.set('addNewQuestion', true);
    },
    queryHide() {
      this.set('addNewQuestion', false);
    },

    saveQuestion() {
      var params = {
        query: this.get('query'),
        notes: this.get('notes'),
        author: this.get('author')
      };

      this.set('addNewQuestion', false),
      this.sendAction('saveQuestion', params);
    }
  }
});
