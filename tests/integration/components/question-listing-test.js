import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('question-listing', 'Integration | Component | question listing', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{question-listing}}`);

  assert.equal(this.$().text().trim(), 'Recent Questions');

  // Template block usage:
  // this.render(hbs`
  //   {{#question-listing}}
  //     template block text
  //   {{/question-listing}}
  // `);
  //
  // assert.equal(this.$().text().trim(), 'template block text');
});
