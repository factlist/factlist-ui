export default (value, unit, suffix) => {
  if (unit !== 'second') {
    return [value, unit + (value !== 1 ? 's' : ''), suffix].join(' ')
  } else if (suffix === 'ago') {
    return 'a few seconds ago'
  } else if (suffix === 'from now') {
    return 'in a few seconds'
  }
}
