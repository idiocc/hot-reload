import hotReload from '../src'

(async () => {
  const res = await hotReload({
    text: 'example',
  })
  console.log(res)
})()