import FakeData from '../src'

describe('Tests from randomize function', () => {
  const fake = new FakeData({
    email: '',
  })

  const configEmailTrue = {
    email: true,
  }

  it('Randomize function returns a object', () => {
    expect(typeof fake.randomize(configEmailTrue)).toBe('object')
  })

  it('Fake object and return by randomize function has same properties', () => {
    expect(Object.getOwnPropertyNames(fake.randomize(configEmailTrue)))
    .toEqual(Object.getOwnPropertyNames(fake.defaultData))
  })

  
  it('Return of function randomize with config in email equal true, is a valid email', () => {

    const regexEmail = /^([^\W][\w\.\+-]*[^\W]*)@([^\W_]*[\w\.-]*[^\W_])$/

    expect(fake.randomize(configEmailTrue)['email'])
      .toEqual(expect.stringMatching(regexEmail))
  })
})

