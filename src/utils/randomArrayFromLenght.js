import { name } from 'faker'

const randomArrayFromLenght = (len) => {
  const getName = () => name.findName()

  const people = []

  for (let i = 0; i < len; i++) {
    people.push(getName())
  }

  return people
}

export default randomArrayFromLenght