import React from 'react'
import Header from './Header'
import TopMainPage from './TopMainPage'
import Navcards from '../NavCards/Navcards'
import Footer from '../Components/Footer'
function Home() {
    return (
        <>
            <Header />
            <main className="bg-light">
                <TopMainPage name="Main Page" />
                <Navcards />
            </main>
            <Footer />

        </>
    )
}

export default Home
