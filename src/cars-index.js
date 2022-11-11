import  React from "react";

const CarComponent = (props) => {
    console.log(props)
    return(
        <div>{props.car.ownerName} bought a {props.car.carColor} {props.car.carYear} {props.car.carBrand}
        </div>
    )
}
export default CarComponent