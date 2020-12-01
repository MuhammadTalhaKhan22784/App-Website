import React from 'react'
import {Link} from "react-router-dom";

function NavCardsItems(props) {
    return (
        <>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">

                    <div className="card-body">
                        <h5 className="card-title">{props.name1}</h5>

                        <p className="card-text">{props.name2}</p>
                        <div className="d-flex">
                            <div className="btn-group">
                                <Link to={props.linkname} className="btn btn-sm btn-danger">{props.name3}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavCardsItems
