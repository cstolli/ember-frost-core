/* jshint expr:true */
import {expect} from 'chai'
import Ember from 'ember'
import Component from 'ember-frost-core/components/frost-component'
import {describeComponent} from 'ember-mocha'
import {
  beforeEach,
  describe,
  it
} from 'mocha'

const {
  run
} = Ember

describeComponent(
  'frost-radio-group',
  'Unit: FrostRadioGroupComponent',
  {
    unit: true
  },
  function () {
    let component

    beforeEach(function () {
      component = this.subject()
    })

    it('sets default property values correctly', function () {
      expect(
        component.get('hook'),
        'hook: undefined'
      ).to.equal(undefined)

      expect(
        component.get('id'),
        'id: null'
      ).to.equal(null)

      expect(
        component.get('inputs'),
        'inputs: []'
      ).to.be.eql([])

      expect(
        component.get('value'),
        'value: null'
      ).to.equal(null)

      expect(
        component.get('selectedValue'),
        'selectedValue: undefined'
      ).to.equal(undefined)
    })

    it('extends the commone frost component', function () {
      expect(
        component instanceof Component,
        'is instance of Frost Component'
      ).to.equal(true)
    })

    describe('"meshedInputs" computed property', function () {
      it('is not set when inputs is not set', function () {
        expect(
          component.get('meshedInputs'),
          '"meshedInputs" is returning an empty list'
        ).to.eql([])
      })

      it('is set when inputs is set', function () {
        const inputs = [{
          value: 'test', label: 'test'
        }]

        run(() => component.set('inputs', inputs))

        expect(
          component.get('meshedInputs')[0].size,
          'default size is set in "meshedInputs"'
        ).to.eq('small')
      })
    })
  }
)
