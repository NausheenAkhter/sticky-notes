import { useReducer } from 'react'
import { initialState, reducer } from '../components/reducer'

const UseAppReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return { state, dispatch }
}

export default UseAppReducer