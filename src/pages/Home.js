import React from 'react'
import Navbar from '../components/Navbar.js'
import Popup from '../components/VidePopup.js'
import Icon from '../img/icon.png'
import Mobile from '../img/mobile.svg'
import AppIcon from '../img/Google Play.svg'
import Membership from '../img/membership icon.svg'
import Faq from '../components/Faq.js'
import Footer from '../components/Footer.js'
function Home() {
  return (
    <>
     <Navbar></Navbar>
     <main>
      <section className='banner'>
        <div className='container'>
            <h1>REAP</h1>
            <h6>Recovery Encrypted <br></br> Access <span>Pass</span></h6>
            <p>REAP is an encrypted private <br></br> storage service for cryptocurrency wallet seed phrases. </p>
                {/* BUTTON ROW */}
        <div className='btn_row'>
          <div className='btn_col'>
            <a href='/how-to-get-reap'>How To Get REAP</a>  
          </div>
          <div className='btn_col'>
          <a href='#/'>Secure Your Wallet Phrases</a>
          </div>
          <div className='btn_col'>
          <a href='#/'>Reap Rewards</a>
          </div>
        </div>
        </div>
        
      </section>

      <section className='video_section'>
        <div className='container'>
          <div className='center'>
          <Popup></Popup>
          </div>
       
        </div>
      </section>

      <section className='section_3'>
        <div className='container'>
          <h2>Benefits of REAP</h2>
          <div className='row_beni'>
            <div className='col_beni'>
              <h3>Convenient</h3>
              <p>REAP is designed with simplicity and convenience in mind, making it accessible for non-technical users. </p>
              <img alt='Icon' src={Icon} className='beni_icon'></img>
            </div>
            <div className='col_beni'>
              <h3>Secure</h3>
              <p>Utilizing world-leading encryption standards, wallet phrases are securely encrypted right on your device, providing unmatched protection and peace of mind. </p>
              <img alt='Icon' src={Icon} className='beni_icon'></img>
            </div>
            <div className='col_beni'>
              <h3>Under Your Control</h3>
              <p>Only you have the power to decrypt your encrypted phrases, and this can be done solely on your device, ensuring absolute privacy and control. </p>
              <img alt='Icon' src={Icon} className='beni_icon'></img>
            </div>
          </div>

          <div className='row_app'>
            <div className='col_app_1'>
               <h1>Download Our <br></br> Mobile <span>App</span> </h1>
               <p>Introducing our revolutionary app, 
                   your gateway to effortless wallet 
                       security and crypto growth. experience
                       a seamless blend of cutting-edge 
                        technology and user-friendly design.</p>
                    
                  <a href='#/'>
                  <img src={AppIcon} alt='appstore'></img>
                  </a>
                  
            </div>
            <div className='col_app_2'>
              <img src={Mobile} alt='mobile'></img>
            </div>
          </div>
        </div>
      </section>

      <section className='section_4' id='membership'>
        <div className='container'>
          <div className='center'>
          <h1>Reap Membership</h1>
          <p>Reap all the crypto rewards you can</p>
          <img alt='membership' src={Membership}></img>
          </div>

          <div className='mem_row'>
            <div className='mem_col'>
              <h5>Yearly</h5>
              <h2>$10</h2>
              <h6>Per year </h6>
              <a href='#/'>Select</a>
            </div>
            <div className='mem_col'>
            <h5>Monthly</h5>
              <h2>$1</h2>
              <h6>Per month </h6>
              <a href='#/'>Select</a>
            </div>
          </div>
          
        </div>
      </section>

      <section className='section_faq' id='faq'>
        <div className='container'>
          <h1>Frequently Asked Questions</h1>
          <h6>Stuck on something we are here to help you</h6>
          <div className='faq_cont'>
          <Faq ></Faq>
          </div>
         
        </div>
      </section>
     </main>

     <Footer></Footer>
    </>
  )
}

export default Home
