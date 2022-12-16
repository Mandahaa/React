import React,{useState, createContext } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"


export const SampleContext = createContext()
function Tree(){
    const [name, setName] = useState({firstName:'Mandahaa', lastName:'Munkhbat'})
    // const [firstName, setFirstName]=useState('Mandahaa')
    // const [lastName, setLastName]=useState('Munkhbat')
    return(
        <div>
            <SampleContext.Provider value={{name}}>
            <Header/>
            <Footer/>
            <Content/>
            </SampleContext.Provider>
        </div>
    )
}
export default Tree

