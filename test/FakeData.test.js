import FakeData from '../src'

describe('Tests from randomize function', () => {
  const fake = new FakeData({
    name: '',
    email: '',
    person: []
  })

  const configRandomize = {
    email: true,
    array: 4
  }

  it('Randomize function returns a object', () => {
    expect(typeof fake.randomize(configRandomize)).toBe('object')
  })

  it('Fake object and return by randomize function has same properties', () => {
    expect(Object.getOwnPropertyNames(fake.randomize(configRandomize)))
    .toEqual(Object.getOwnPropertyNames(fake.defaultData))
  })

  it('Return of function randomize with config in email equal true, is a valid email', () => {

    const regexEmail = /^([^\W][\w\.\+-]*[^\W]*)@([^\W_]*[\w\.-]*[^\W_])$/

    expect(fake.randomize(configRandomize)['email'])
      .toEqual(expect.stringMatching(regexEmail))
  })

  it('Email configured by false, should return a random string', () => {

    const regexEmail = /^([^\W][\w\.\+-]*[^\W]*)@([^\W_]*[\w\.-]*[^\W_])$/

    expect(fake.randomize()['email'])
      .not.toEqual(expect.stringMatching(regexEmail))
  })
  
  it('Randomize array with lenght in config', () => {
    expect(fake.randomize(configRandomize)['person'].length).toBe(configRandomize.array)
  })
})

