import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        query: this.get('query'),
        notes: this.get('notes'),
        author: this.get('author') ? this.get('author') : 'Anonymous',
        date: new Date()
      };

      this.sendAction('saveQuestion', params);
    }
  }
});
