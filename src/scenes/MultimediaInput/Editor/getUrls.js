import urlRegex from 'utils/url-regex'

export const getUniqueUrls = text => {
  const urls = text.match(urlRegex())

  return urls ? Array.from(new Set(urls)) : []
}

export const getUrlsWithIndex = text => {
  const urls = []
  const regex = urlRegex()

  let matchArr
  while ((matchArr = regex.exec(text)) !== null) {
    const start = matchArr.index
    const end = start + matchArr[0].length

    urls.push({ url: matchArr[0], start, end })
  }

  return urls
}
