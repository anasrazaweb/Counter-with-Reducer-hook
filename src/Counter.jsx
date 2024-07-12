import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if (action.type === "ADDITION") {
        return state + 1
    }
    if (action.type === "SUBTRACTION") {
        return state - 1
    }
    if (action.type === "MULTIPLAYCATION") {
        return state * 2
    }
    if (action.type === "RESEAT") {
        return state * 0
    }
    return state
}
const initialState = 0
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className=' h-screen w-screen bg-blue-400'>
            <div className=' h-full w-full flex justify-center items-center '>
                <div className=' w-full md:w-[40%]'>
                    <h1 className=' text-3xl  font-bold text-center mb-10 sm:px-0 px-5'>Counter With Reducer Hook</h1>
                    <h1 className=' text-5xl font-bold font-mono text-center'>{state}</h1>
                    <div className=' mt-10 flex gap-5 flex-wrap justify-center'>
                        <button
                            onClick={()=>dispatch({ type: "ADDITION" })}
                            className=' py-2 w-1/3 rounded-full bg-blue-50 hover:bg-blue-100'>
                            Addition
                        </button>
                        <button
                            onClick={()=>dispatch({ type: "SUBTRACTION" })}
                            className=' py-2 w-1/3 rounded-full bg-blue-50 hover:bg-blue-100'>
                            Subtraction
                        </button>
                        <button
                            onClick={()=>dispatch({ type: "MULTIPLAYCATION" })}
                            className=' py-2 w-1/3 px-5 rounded-full bg-blue-50 hover:bg-blue-100'>
                            Multiply
                        </button>
                        <button
                            onClick={()=>dispatch({ type: "RESEAT" })}
                            className=' py-2 w-1/3 rounded-full bg-blue-50 hover:bg-blue-100'>
                            Reseat
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter