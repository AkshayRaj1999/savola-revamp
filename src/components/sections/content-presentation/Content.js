import React from 'react'
import "./Content.css"
import contentImage from '../../../images/images/ContentImage.png'

function Content() {
  return (
    <section>
        <div className="container-fluid">
            <div className="contentimage-wrapper">
                <img src={contentImage} alt="content" />
            </div>
        </div>
    </section>
  )
}

export default Content