import React from 'react'

const PersonComponent = (props) => {
    console.log(props)
    return(
        <div>Hello, {props.firstName}! wat waaaat</div>
    )
}

export default PersonComponent