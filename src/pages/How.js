import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

function How() {
  return (
    <div>
     <Navbar></Navbar>
     <section className='how'>
        <div className='container'>
            <h1>How To Get Reap</h1>
            <div className='how_row'>
                <div className='how_col'>
                    <h2><span>1</span> Download Our Mobile App</h2>
                    <p>Safeguard your crypto journey with our mobile app. It's not just a wallet; it's your secure seed phrase vault. Rest easy knowing your crucial crypto information is protected, even on the go, and experience the freedom of managing your crypto holdings from your mobile device.</p>
                    <a href='#/'>Download</a>
                </div>
                <div className='how_col'>
                <h2><span>2</span> Phurchase Membership</h2>
                <p>Unlock exclusive benefits and premium features with our membership plans. Choose the membership that suits your needs and enjoy a new level of crypto convenience.</p>
                <a href='#/'>Choose a Plan</a>
                </div>
                <div className='how_col'>
                <h2><span>3</span>Connect Wallet</h2>
                <p>Safely connect your wallet to our platform and maintain full control over your crypto journey. Experience the power of managing your assets with ease and peace of mind.</p>
                <a href='#/'>Connect Wallet</a>
                </div>
            </div>
        </div>
     </section>
     <Footer></Footer>
    </div>
  )
}

export default How