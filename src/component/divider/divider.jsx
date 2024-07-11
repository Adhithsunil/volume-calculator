import React from 'react'
import "./divider.css"
import Navbar from "../navbar/navbar";

const Divider = () => {
  return (
    <div className="dividers" id='divider'>
        <Navbar />
        <div className="optionsheading">
            <h1 className='headingvariety'>Varity of pets</h1>
        </div>
        <hr />
        <p className="petparagraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit tenetur nam, cum doloremque officiis dolorum totam suscipit explicabo eos eius!</p>
        <hr />
    <div className='optionsofpets'>

        
      <div className="box2">
      <div className="image1"><img className="imagesource" src="./assest/nativefish.png" alt="not found" /></div>
        <h2 className='optionspecies' >Native species</h2>
      </div>

      <div className="box2">
        <div className="image1"><img className="imagesource" src="./assest/nativefish.png" alt="not found" /></div>
        <h2 className='optionspecies'>Aquarium species</h2>
      </div>

      <div className="box2">
        <div className="image1"><img className="imagesource" src="./assest/nativefish.png" alt="not found" /></div>
        <h2 className='optionspecies'>Predator species</h2>
      </div>

      <div className="box2">
        <div className="image1"><img className="imagesource" src="./assest/nativefish.png" alt="not found" /></div>
        <h2 className='optionspecies'>Amfebian species</h2>
      </div>

    </div>
    </div>
  )
}

export default Divider;
