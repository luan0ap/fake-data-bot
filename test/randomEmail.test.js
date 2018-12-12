import randomEmail from '../src/utils/randomEmail'

test('Valid randomEmail return', () => {
  const regexEmail = /^([^\W][\w\.\+-]*[^\W]*)@([^\W_]*[\w\.-]*[^\W_])$/

  expect(randomEmail())
    .toEqual(expect.stringMatching(regexEmail))
})