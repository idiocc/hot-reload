import { c } from 'erte'

/**
 * @type {_hotReload.hotReload}
 */
export default async function hotReload(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return ''
  console.log('@idio/hot-reload called with %s', c(text, 'yellow'))
  return text
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').hotReload} _hotReload.hotReload
 */
