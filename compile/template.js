const { _hotReload } = require('./hot-reload')

/**
 * @methodType {_hotReload.hotReload}
 */
function hotReload(config) {
  return _hotReload(config)
}

module.exports = hotReload

/* typal types/index.xml namespace */
