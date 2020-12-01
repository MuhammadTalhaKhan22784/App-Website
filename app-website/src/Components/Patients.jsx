import React from 'react'
import Header from '../Components/Header'
import Footer from './Footer'
import PatientsTable from './PatientsTable'
import TopMainPage from './TopMainPage'

function Patients() {
    return (
        <>
            <Header />
            <main className="bg-light">
                <TopMainPage name="Patients" />
                <PatientsTable/>
            </main>
            <Footer/>
        </>
    )
}

export default Patients
