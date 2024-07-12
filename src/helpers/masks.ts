export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const creditCardMask = (number: string) => {
  number = number
    .replace(/\D/g, '')
    .replace(/^(\d{4})(\d)/g, '$1 $2')
    .replace(/^(\d{4})\s(\d{4})(\d)/g, '$1 $2 $3')
    .replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, '$1 $2 $3 $4')
  return number
}

export const credCardDateMask = (number: string) => {
  number = number.replace(/\D/g, '').replace(/^(\d{2})(\d)/g, '$1/$2')
  return number
}

export const cvvMask = (number: string) => {
  number = number.replace(/\D/g, '')
  return number
}
