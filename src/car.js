import React from "react";
import CarComponent from "./cars-index";

const cars = [
    {
      ownerName:'Mandahaa',
      Carbrand:'Kia',
      carYear:'2021',
      carColor:'WolfGrey'
    },
    {
      ownerName:'Huluguu',
      Carbrand:'Tesla',
      carYear:'2022',
      carColor:'White'
    },
    {
      ownerName:'Jaagii',
      Carbrand:'Benz',
      carYear:'2020',
      carColor:'Black'
    },
    {
      ownerName:'Muugii',
      Carbrand:'Lexus',
      carYear:'2021',
      carColor:'Blue'
    }
    ]

const CarComponentParent = () => {
    return(
        <div>
            {cars.map((car, carsIdx) => {
                return(
                    <CarComponent car={car} key={carsIdx}/>
                )
            })}
        </div>
    )
}
export default CarComponentParent

    