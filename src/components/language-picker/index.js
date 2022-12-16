import React, {useState} from "react";
import './index.css'


const flaglist = [
    {name:'usa-flag', source:"https://static.vecteezy.com/system/resources/previews/000/532/212/original/vector-united-states-of-america-flag-usa-flag-america-flag-background.jpg"},
    {name:'indian-flag', source:'https://www.happywalagift.com/wp-content/uploads/2015/08/India_flag-2016.jpg'},
    {name:'japan-flag', source:'https://wallpapercave.com/wp/wp3996103.jpg'},
    {name:'spain-flag', source:'https://apollomarine.co.uk/wp-content/uploads/2018/12/27.327.030.jpg'}
]
const LanguageSelecter = () => {
    const [currFlag, setCurrFlag] = useState('')
    return(
        <div className="border">
            <div>
                {currFlag !== '' ? <img src={currFlag.source} alt='' height='175' width='350'/> : 'Select Your Language'}
            </div>
        <div className="bottom-flags">
            {flaglist.map((flag)=>{
                return(flag.name !== currFlag.name ? 
                <button onClick={()=>{
                    setCurrFlag(flag)
                }}>
                    <img src={flag.source} alt='' height='50' width='100' />
                </button>
                : <div></div>
                )
            })}
            
        
        </div>
        </div>
    )
}
export default LanguageSelecter