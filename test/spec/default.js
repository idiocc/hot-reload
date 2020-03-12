import { equal } from '@zoroaster/assert'
import Context from '../context'
import hotReload from '../../src'

/** @type {TestSuite} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof hotReload, 'function')
  },
  async 'calls package without error'() {
    await hotReload()
  },
  async 'gets a link to the fixture'({ fixture, readFile }) {
    const path = fixture`test.txt`
    const text = readFile(path)
    const res = await hotReload({
      text,
    })
    equal(res, text)
  },
}

/**
 * @typedef {import('../context').TestSuite} TestSuite
 */

export default T