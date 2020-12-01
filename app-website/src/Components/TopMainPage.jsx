import React from 'react'

function TopMainPage(props) {

    return (
        <>
            <section className="jumbotron text-center py-2">
                <div className="container">
                    <h4 className="jumbotron-heading">{props.name}</h4>
                </div>
            </section>
        </>
    )
}

export default TopMainPage
