import urlRegex from 'utils/url-regex'

export default (contentBlock, callback) => {
  const text = contentBlock.getText()
  const regex = urlRegex()

  let matchArr
  while ((matchArr = regex.exec(text)) !== null) {
    const start = matchArr.index
    const end = start + matchArr[0].length

    callback(start, end)
  }
}
