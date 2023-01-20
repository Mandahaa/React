import React, {useState} from "react"

const data = {
    "name":"John",
    "additionalData":{
       "instructor":true,
       "favoriteHobbies":[
          "Coding",
          "Playing Basketball"
       ],
       "favoriteFood":{
          "type":"soup",
          "includeNoodle":true
       },
       "moreDetails":{
          "favoriteBasketballPlayer":"Kyrie Irving",
          "numberOfSiblings":5,
          "isYoungest":true,
          "hometown":{
             "city":"Portland",
             "state":"OR"
          },
          "citiesLivedIn":[
             "Portland",
             "Chicago",
             "Ulaanbaatar"
          ]
       }
    }
  }

const SampleData = () => {
     const[sampleData, setSampleData] = useState(data)
    return (
        <div>
        <pre>{JSON.stringify(sampleData,null,2)}</pre>

        <button onClick= {() => 
            {setSampleData(currState =>({...currState,
                name: 'Mandahaa'}))}}>Change Name</button>

        <button onClick= {() => 
            {setSampleData(currState =>({...currState,
                additionalData: {...currState.additionalData,
                    favoriteHobbies:[...currState.additionalData.favoriteHobbies,
                        'Playing Volleyball']}}))}}>Add Hobby</button>

        <button onClick= {() =>
            {setSampleData(currState =>({...currState,
                additionalData: {...currState.additionalData,
                    favoriteFood: {...currState.additionalData.favoriteFood,
                        includeNoodle: false}}}))}}>Change Fav Food</button>

        <button onClick= {() =>
            {setSampleData(currState =>({...currState,
                additionalData: {...currState.additionalData,
                    moreDetails: {...currState.additionalData.moreDetails,
                        isYoungest: false}}}))}}>Change Youngest</button>

        <button onClick= {() =>
            {setSampleData(currState =>({...currState,
                additionalData: {...currState.additionalData,
                    moreDetails: {...currState.additionalData.moreDetails,
                        hometown: {...currState.additionalData.moreDetails.hometown,
                            state: "CA"}}}}))}}>Change State</button>

        <button onClick= {() =>
            {setSampleData(currState =>({...currState,
                additionalData: {...currState.additionalData,
                    moreDetails: {...currState.additionalData.moreDetails,
                        citiesLivedIn: currState.additionalData.moreDetails.citiesLivedIn.filter(item=>item !== 'Ulaanbaatar')}}}))}}>Remove City</button>
                            
        <button onClick= {() =>
            {setSampleData(currState =>({...currState,
                additionalData: {...currState.additionalData,
                    moreDetails: {...currState.additionalData.moreDetails,
                        citiesLivedIn: [...currState.additionalData.moreDetails.citiesLivedIn, "Schaumburg"]}}}))}}>Add City</button>
        
        </div>
    )

}
export default SampleData