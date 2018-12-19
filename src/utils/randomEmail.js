import { internet } from 'faker'

const randomEmail = (name = '') => internet.email(name)

export default randomEmail