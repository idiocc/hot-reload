const { _hotReload } = require('./hot-reload')

/**
 * Dummy Code For Hot-Reload Compilation.
 * @param {!_hotReload.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function hotReload(config) {
  return _hotReload(config)
}

module.exports = hotReload

/* typal types/index.xml namespace */
/**
 * @typedef {_hotReload.Config} Config `＠record` Options for the program.
 * @typedef {Object} _hotReload.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
