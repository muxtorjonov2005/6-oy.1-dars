import React from 'react'
import './App.css'
import './fotns.css'
import playImg from './assets/images/play.svg'
function App() {
  return (
    <div>
      <header className='cantainer'>
        <div className="logo"><a id='logotip' href="#">ShapeVoice</a></div>
        <div className='nav'>
        <nav>
          <ul>
            <li><a href="#">Product</a><a href="#"><img src="" alt="" /></a></li>
            <li><a href="#">Template</a><a href="#"><img src="" alt="" /></a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </nav>
        <div className="sign"><button>Sign In</button><button id='sign'>Start Free</button></div>
        </div>
      </header>
      <main className='cantainer'>
        <div className="info">
          <h1>Managing business payments has never been easier</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything.</p>
          <div className="but">
            <a href="#" id='see'>Our Process</a>
            <a href="#" id='play'><div id='play_back'><img src={playImg} alt=""/></div><span>See How It Works</span></a>
          </div>
        </div>
        <div className="regst">
          <h3>Get Started for Free</h3>
          <input type="email" name="" id="" placeholder='Email Address' />
          <input type="password" name="" id="" placeholder='Password'/>
          <button>Get Started</button>
        </div>
      </main>
      <div className="sponser cantainer">
        <h3>Trusted By Over 100+ Startups and freelance business</h3>
        <a href="#"><img src="" alt="" /></a>
        <a href="#"><img src="" alt="" /></a>
        <a href="#"><img src="" alt="" /></a>
        <a href="#"><img src="" alt="" /></a>
        <a href="#"><img src="" alt="" /></a>
      </div>
      <div className="believ cantainer">
        <h3>Believing neglected so so allowance</h3>
        <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>
        <button>We so opinion friends me message as delight.</button>
      </div>
      <div className="card cantainer">
        <div className='card_block'>
          <img src="" alt="" />
          <h4>Led Ask Possible Mistress</h4>
          <p>Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
        </div>
        <div className='card_block'>
          <img src="" alt="" />
          <h4>Elegance Eat Likewise</h4>
          <p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode.</p>
        </div>
        <div className='card_block'>
          <img src="" alt="" />
          <h4>Message Oram Nothing</h4>
          <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
        </div>
      </div>
      <footer className='cantainer'>
        <h3>Track your crytpo portfolio on the best way possible</h3>
        <button>Check It Out</button>
      </footer>
    </div>
  )
}

export default App