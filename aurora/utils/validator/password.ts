const minEight = (pass: string) => {
  return String(pass).match(/^.{8,}$/)
}

const number = (pass: string) => {
  return String(pass).match(/^(?=.*?[0-9]).{1,}$/)
}

const uppercase = (pass: string) => {
  return String(pass).match(/^(?=.*?[A-Z]).{1,}$/)
}

const lowercase = (pass: string) => {
  return String(pass).match(/^(?=.*?[a-z]).{1,}$/)
}

const specialChar = (pass: string) => {
  return String(pass).match(/^(?=.*?[#?!@$%^&*_-]).{1,}$/)
}

const noSpace = (pass: string) => {
  return String(pass).match(/^\S*$/)
}

const finalize = (pass: string) => {
  return String(pass).match(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_-]).{8,}$/,
  )
}

const Func = (pass: string) => {
  if (number(pass) === null) {
    return {
      error: true,
      type: 'number',
      msg: 'Passwords must have Number',
    }
  }
  if (lowercase(pass) === null) {
    return {
      error: true,
      type: 'lowercase',
      msg: 'Passwords must have Lowercase',
    }
  }
  if (uppercase(pass) === null) {
    return {
      error: true,
      type: 'uppercase',
      msg: 'Passwords must have Uppercase',
    }
  }
  if (specialChar(pass) === null) {
    return {
      error: true,
      type: 'specialChar',
      msg: 'Passwords must have Special characters',
    }
  }
  if (noSpace(pass) === null) {
    return { error: true, type: 'minimum', msg: "Passwords mustn't have space" }
  }
  if (minEight(pass) === null) {
    return {
      error: true,
      type: 'minimum',
      msg: 'Passwords need more than 8 characters',
    }
  }
  if (finalize(pass) === null) {
    return { error: true, type: 'minimum', msg: 'Password not valid' }
  }
  return { error: false }
}

const validatePassword = {
  minEight,
  number,
  uppercase,
  lowercase,
  specialChar,
  noSpace,
  finalize,
  Func,
}
export default validatePassword
