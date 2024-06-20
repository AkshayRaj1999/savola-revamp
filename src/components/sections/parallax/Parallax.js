import React from 'react'
import "./Parallax.css"
import ParallaxImage from "../../../images/images/parallax.png"

function Parallax() {
  return (
    <section>
    <div className='container-fluid'>
        <div className="ParallaxImageContainer">
            <img src={ParallaxImage} alt="Parallax" />
            <div className="ParallaxCTAContainer">
              <h4>Feel free to contact us any time!</h4>
              <button type="button" class="btn btn-primary ParallaxCTAButton">Contact us</button>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Parallax