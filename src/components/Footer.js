import React from 'react'
import Logo from '../img/footer_logo.png'
import Telegram from '../img/Telegram.svg'
import Twitter from '../img/X.svg'
import Facebook from '../img/Facebook.svg'
import Discord from '../img/Dicord.svg'
import Youtube from '../img/Youtube.svg'


function Footer() {
  return (
    <>
    <footer>
        <div className='container'>
          <img className='footer_logo' alt='logo' src={Logo}></img>  
          <div className='footer_row'>
            <div className='footer_col'>
                <h4>Learn More</h4>
                <ul>
                    <li>
                        <a href='#/'>About</a>
                    </li>
                    <li>
                        <a href='#/'>Security</a>
                    </li>
                </ul>
            </div>
            <div className='footer_col'>
              <h4>Legal</h4>
              <ul>
                    <li>
                        <a href='#/'>Terms of Service</a>
                    </li>
                    <li>
                        <a href='#/'>Privacy Policy</a>
                    </li>
                </ul>
            </div>
            <div className='footer_col social_icons'>
               <ul>
                  <li>
                        <a href='https://t.me/apriloracle'><img src={Telegram} alt='icon' ></img></a>
                        <a href='https://twitter.com/Aprilmyoracle'><img src={Twitter} alt='icon' ></img></a>
                        <a href='https://www.facebook.com/apriltokens'><img src={Facebook} alt='icon' ></img></a>
                        <a href='https://discord.gg/fbhC4QPSda '><img src={Discord} alt='icon' ></img></a>
                        <a href='https://www.youtube.com/c/AprilToken'><img src={Youtube} alt='icon' ></img></a>
                  </li>
               </ul>
            </div>
          </div>

          <div className='copyright'>
            <div className='copy_col'>
              <span>Email: info@apriloracle.com</span>
            </div>
            <div className='copy_col'>
              <span>Toronto & Dubai</span>
            </div>
            <div className='copy_col'>
              <span>© 2023 April Oracle</span>
            </div>
          </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
