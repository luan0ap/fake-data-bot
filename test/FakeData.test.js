import FakeData from '../src'

test('Randomized object', () => {
  const fake = new FakeData({
    name: '',
    email: '',
    others: []
  })

  const configRandomize = {
    email: true,
    array: 4
  }
  
  const result = {
    name: 'Pedrinho',
    email: '12345@test.com'
    other: [1,2,3,4]
  }

  expect(fake.randomize(configRandomize)).toBe(result)
  
})