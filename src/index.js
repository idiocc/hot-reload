/*
 * This file should only be used for compilation with Depack. The
 * `@idio/frontend` middleware is supposed to override `@idio/hot-reload`
 * import into `/hot-reload` path automatically, without the need for
 * the code from this package.
 */

/**
 * Registers hot-reload callback to rerender apps.
 * @param {!Function} cb
 */
export default function addHotReload(cb) {}