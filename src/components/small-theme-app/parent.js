import React,{useContext, useState} from "react";
import { createContext } from "react";
import ChildA from './childA'
import ChildB from './childB'

export const ThemeContext = createContext()
export default function Parent(){
    const [item , setItem] = useState(false)
    return(
        <div>
            <ThemeContext.Provider value={{item, setItem}}>
            <ChildA/>
            <ChildB/>
            </ThemeContext.Provider>
        </div>
    )
}
