import React from 'react'
import PropTypes from 'prop-types'

export default function Alert1(props) {
    return (
       props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.capitalize(props.Alert.type)}</strong>: {props.Alert.content}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>


    )
}
