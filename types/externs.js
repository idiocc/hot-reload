/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _hotReload = {}
/**
 * Options for the program.
 * @record
 */
_hotReload.Config
/**
 * A boolean option. Default `true`.
 * @type {boolean|undefined}
 */
_hotReload.Config.prototype.shouldRun
/**
 * A text to return.
 * @type {string|undefined}
 */
_hotReload.Config.prototype.text

/* typal types/api.xml externs */
/**
 * Dummy Code For Hot-Reload Compilation.
 * @typedef {function(!_hotReload.Config): !Promise<string>}
 */
_hotReload.hotReload
