import randomName from '../src/utils/randomName'

test('Must return a string', () => {
  expect(typeof randomName()).toBe('string')
})