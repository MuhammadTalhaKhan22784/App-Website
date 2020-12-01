import React from 'react'
import AuthorNav from './AuthorNav'
import NavCardsItems from './NavCardsItems'
function Navcards() {

    const lPName=["List of patients", "List of patients","View"]
    const dBName=["Donate blood","Donate your blood!","View"]
    const aBName=["Availability","Availability of blood","View"]
    const conName =["Contact","Contact us!","View"]
    return (

        <>
            <div className="album py-5">
                <div className="container">
                    <div className="row">
                    <NavCardsItems  name1={lPName[0]} name2={lPName[1]} name3={lPName[2]} linkname="/patients"/>
                    <NavCardsItems  name1={dBName[0]} name2={dBName[1]} name3={dBName[2]} linkname="/donate-blood"/>
                    <NavCardsItems  name1={aBName[0]} name2={aBName[1]} name3={aBName[2]} linkname="/availability"/>
                    <NavCardsItems  name1={conName[0]} name2={conName[1]} name3={conName[2]} linkname="/contact"/>
                    <AuthorNav linkname="/author"/>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Navcards
