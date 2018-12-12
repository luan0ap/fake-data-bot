import randomArrayFromLenght from '../src/utils/randomArrayFromLenght'

test('Must return a random array with lenght by parameter', () => {
  const LENGTH = 5
  const randomArray = randomArrayFromLenght(LENGTH)
  
  expect(Array.isArray(randomArray)).toBe(true)
  expect(randomArray.length).toEqual(LENGTH)
})