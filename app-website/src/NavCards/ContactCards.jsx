import React from 'react'

function ContactCards(props) {
    return (
        <>
            
                    <div className="col-lg-4">
                        <i className={props.name1}></i>
                        <h2>{props.name2}</h2>
                        <p>{props.name3}</p>
                        <p><a className="btn btn-danger" href="tel:123132123" role="button">{props.name4} <i
                            className="fas fa-phone"></i></a></p>
                    </div>
             
        </>
    )
}

export default ContactCards
