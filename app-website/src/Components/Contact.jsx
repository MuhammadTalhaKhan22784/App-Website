import React from 'react'
import ContactCards from '../NavCards/ContactCards'
import Header from './Header'
import TopMainPage from './TopMainPage'
import Footer from '../Components/Footer'

function Contact() {

const nurseName=["fas fa-user-nurse fa-10x pb-3","Nurse","Call the nurse","Call"]
const bTDName=["fas fa-user-tie fa-10x pb-3","Blood Transfer Director","Call the Director","Call"]
const cSName =["fas fa-headset fa-10x pb-3","Client service","Call client service","Call"]
    return (
        <>
            <Header/>
            
            <main className="bg-light">
            <TopMainPage name="Contact"/>
            <div className="container marketing">
                <div className="row text-center">
                <ContactCards name1={nurseName[0] } name2={nurseName[1]} name3={nurseName[2]} name4={nurseName[3] }/>
                <ContactCards name1={bTDName[0] } name2={bTDName[1]} name3={bTDName[2]} name4={bTDName[3] }/>
                <ContactCards name1={cSName[0] } name2={cSName[1]} name3={cSName[2]} name4={cSName[3] }/>
                    </div>
                    </div>
                
            </main>
            <Footer />

        </>
    )
}

export default Contact
