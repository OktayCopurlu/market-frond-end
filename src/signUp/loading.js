import React from 'react'
import loading from "../../store/Loading.svg"
export default function Loading() {

    return (
        <div className="d-flex justify-content-center">
            <h3 className="m-auto"><img className="m-auto" src={loading} alt="Loading..."/></h3>
        </div>
    )
}
