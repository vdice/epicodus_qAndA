import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add-answer', 'Integration | Component | add answer', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{add-answer}}`);

  assert.equal(this.$().text().trim(), 'Add Answer');

  // Template block usage:
  // this.render(hbs`
  //   {{#add-answer}}
  //     template block text
  //   {{/add-answer}}
  // `);
  //
  // assert.equal(this.$().text().trim(), 'template block text');
});
