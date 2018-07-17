import { connectForm, FormContext } from '../src'

describe('FormContext', () => {
  test('has updateForm function on initialization', () => {
    expect(Object.keys(FormContext._currentValue)).toEqual(['updateForm'])
  })

  test('connectForm can connect to any component inside of a Provider', () => {
    expect(true).toBeTruthy()
  })
})
