export const required = value => (value ? undefined : 'This field is required.')

export const minLength = min => value =>
  value && value.length < min ? `Minimum ${min} characters.` : undefined
