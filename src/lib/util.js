import zipObject from 'lodash/zipObject'


// object version of the Promise.all util
export const promiseAllObj = promiseDict =>
  Promise.all([
    Promise.resolve(Object.keys(promiseDict)),
    Promise.all(Object.values(promiseDict)),
  ])
    .then(([keys, vals]) => zipObject(keys, vals))

export const readFile = (file, readMethod = 'readAsDataURL') =>
  new Promise((res, rej) => {
    const reader = new FileReader()

    reader.onload = e => res(e.target.result)
    reader.onerror = reader.onabort = e => rej(e.type)

    reader[readMethod](file)
  })

export const debounce = (fn, delay, immediate = false) => {
  let timeoutId

  return (...args) => {
    clearTimeout(timeoutId)

    return new Promise (res => {
      const callNow = immediate && !timeoutId

      timeoutId = setTimeout (
        () => {
          timeoutId = null

          if (!immediate)
            res(fn(...args))
        },
        delay
      )

      if (callNow)
          res(fn (...args))
    })
  }
}
