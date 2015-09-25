import DS from 'ember-data';

export default DS.Model.extend({
  query: DS.attr(),
  notes: DS.attr(),
  author: DS.attr()
});
