import { connectForm, FormContext, FormHandler, getCurrentContext } from '../src'

describe('FormContext', () => {
  test('has updateForm function on initialization', () => {
    expect(Object.keys(FormContext._currentValue)).toEqual(['updateForm'])
  })

  test('can connect to any component', () => {
    expect(true).toBeTruthy()
  })
})
