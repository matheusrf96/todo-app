import React from "react"

import If from "../helper/If"

const IconButton = (props) => {
    return (
        <If test={ !props.hide }>
            <button className={ `btn btn-${ props.style }` } onClick={ props.onClick }>
                <i className={ `fa fa-${ props.icon }` }></i>
            </button>
        </If>
    )
}

export default IconButton