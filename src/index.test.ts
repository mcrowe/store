import test from 'ava'
import Store from './index'


test('basics', t => {
  const store = new Store({a: 5})

  const val = store.get()

  val.a = 6

  t.is(store.get().a, 6)

  let calls = 0

  store.subscribe(() => {
    calls += 1
  })
  store.broadcast()

  t.is(calls, 1)
})