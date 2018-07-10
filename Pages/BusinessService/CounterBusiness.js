import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
// action types
export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'
export const RESET = 'RESET'

// actions
const increase = () => ({ type: INCREASE })
const decrease = () => ({ type: DECREASE })
const reset = (num) => ({ type: RESET, num })

// reducers
const defaultState = {
  count: 5
}

function counter (state = defaultState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 }
    case DECREASE:
      return { ...state, count: state.count - 1 }
    case RESET:
      return { ...state, count: action.num }
    default:
      return state
  }
}

const reducers = combineReducers({counter})

const configureStore = preloadedState => {
  return createStore(
    reducers,
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
