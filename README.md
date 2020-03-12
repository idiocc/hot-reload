# @idio/hot-reload

[![npm version](https://badge.fury.io/js/%40idio%2Fhot-reload.svg)](https://www.npmjs.com/package/@idio/hot-reload)

`@idio/hot-reload` is Dummy Code For Hot-Reload Compilation.

```sh
yarn add @idio/hot-reload
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`hotReload(callback): void`](#hotreloadcallback-function-void)
- [Copyright & License](#copyright--license)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import hotReload from '@idio/hot-reload'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code><ins>hotReload</ins>(</code><sub><br/>&nbsp;&nbsp;`callback: function(),`<br/></sub><code>): <i>void</i></code>
The re-rendering function to execute after an update to
any of the files is made.

 - <kbd><strong>callback*</strong></kbd> <em>`function()`</em>: The callback.

```js
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
```

This package is meant to be installed when building bundles that use hot-reload from [`@idio/front-end`](https://github.com/idiocc/frontend) middleware. The middleware will serve its proper version of source code needed for hot-reload, but `@idio/hot-reload` is needed when it comes to compiling apps.

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright & License

GNU Affero General Public License v3.0

<table>
  <tr>
    <td><img src="https://avatars1.githubusercontent.com/u/40834161?v=4&amp;s=100" alt="idiocc"></td>
    <td>© <a href="https://www.idio.cc">Idio</a> 2020</td>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>