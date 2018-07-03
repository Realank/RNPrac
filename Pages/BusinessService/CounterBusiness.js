import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
// action types
export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'
export const RESET = 'RESET'

// actions
const increase = () => ({ type: INCREASE })
const decrease = () => ({ type: DECREASE })
const reset = () => ({ type: RESET })

// reducers
const defaultState = {
  count: 5,
  factor: 1
}

function counter (state = defaultState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + state.factor }
    case DECREASE:
      return { ...state, count: state.count - state.factor }
    case RESET:
      return { ...state, count: 0 }
    default:
      return state
  }
}

const reducer = combineReducers({counter})

const configureStore = preloadedState => {
  return createStore(
    reducer,
    preloadedState,
    compose(
      applyMiddleware(createLogger)
    )
  )
}

// const createStoreWithMiddleware = applyMiddleware(createLogger)(createStore)
//
// const configureStore = preloadedState => {
//   return createStoreWithMiddleware(reducer, preloadedState)
// }

const store = configureStore()

export {store, increase, decrease, reset}
