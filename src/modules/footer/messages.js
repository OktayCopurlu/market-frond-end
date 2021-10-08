import React from 'react'

export default function Messages(props) {
    const messages = props.element
    console.log(messages)
    return (
        <div className="container d-flex justify-content-center align-items-center">
           <h3>{messages}</h3>
        </div>
    )
}
