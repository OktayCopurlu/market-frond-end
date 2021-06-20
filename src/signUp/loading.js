import React from 'react'
const img="http://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg"
export default function Loading() {

    return (
        <div className="d-flex justify-content-center">
            <img alt="Loading..." src={img}/>
        </div>
    )
}
