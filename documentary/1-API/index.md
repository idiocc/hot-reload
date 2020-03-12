## API

The package is available by importing its default function:

```js
import hotReload from '@idio/hot-reload'
```

%~%

<typedef noArgTypesInToc method="hotReload">types/api.xml</typedef>

<!-- <typedef>types/index.xml</typedef> -->
%EXAMPLE: src%

This package is meant to be installed when building bundles that use hot-reload from [`@idio/front-end`](https://github.com/idiocc/frontend) middleware. The middleware will serve its proper version of source code needed for hot-reload, but `@idio/hot-reload` is needed when it comes to compiling apps.

<!-- %FORK example% -->

%~%