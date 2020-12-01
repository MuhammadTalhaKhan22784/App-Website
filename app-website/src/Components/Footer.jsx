import React from 'react'
import { Link } from 'react-router-dom'
import logo2em from '../resources/images/logo2em.svg'
function Footer() {
    return (
        <>
            <footer className="container py-5">
                <div className="row">
                    <div className="col-12 col-md">
                        <img alt="logo" src={logo2em} />
                    </div>
                    <div className="col-6 col-md">
                        <h5>Hospitals</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="http://brodnowski.pl/">Brudnowski</a></li>
                            <li><a className="text-muted" href="https://www.szpitalpraski.pl/">Praski</a></li>
                            <li><a className="text-muted" href="https://www.pib-nio.pl/">Narodowy Instytut Onkologiczny</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Other links</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link className="text-muted" to="/">Home</Link></li>
                            <li><Link className="text-muted" to="/contact">Contact</Link></li>
                            <li><Link className="text-muted" to="/patients">Patients</Link></li>

                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
