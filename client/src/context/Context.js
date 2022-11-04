import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STAT = {
    user:null,
    isFetching:false,
    error:false,
};

export const Context = createContext(INITIAL_STAT);



export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STAT);

    return (
        <Context.Provider value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
        )
}