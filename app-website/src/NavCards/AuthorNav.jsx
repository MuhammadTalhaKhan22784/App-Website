import React from 'react'
import { Link } from 'react-router-dom'
import myFaceImg from '../resources/images/myface.jpg'
function AuthorNav(props) {
    return (
        <>
             <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img className="card-img-top" alt="pic of the author"
                                style={{height: "320px", width: "100%", display: "block"}} src={myFaceImg}
                                data-holder-rendered="true"/>
                            <div className="card-body">
                                <h5 className="card-title">Author</h5>

                                <p className="card-text">Author info</p>
                                <div className="d-flex">
                                    <div className="btn-group">
                                        <Link to={props.linkname} className="btn btn-sm btn-danger">View</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default AuthorNav
