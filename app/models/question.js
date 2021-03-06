import DS from 'ember-data';

export default DS.Model.extend({
  query: DS.attr(),
  notes: DS.attr(),
  author: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),
  date: DS.attr()
});
