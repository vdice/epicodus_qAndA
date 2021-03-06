import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('question', {path: '/question/:question_id'});
  this.route('new-question', {path: '/question/new'});
  this.route('edit-question', {path: '/question/:question_id/edit'});
});

export default Router;
