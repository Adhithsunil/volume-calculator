import React, { useState } from 'react';
import "./volumec.css"
import Navbar from '../navbar/navbar';

const VolumeC = () => {
  const [topping, setTopping] = useState("m");
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [radius, setRadius] = useState(0);
  const [volume, setVolume] = useState(0);
  const [selectedTank, setSelectedTank] = useState('rectangular'); // New state for selected tank

  const onOptionChange = e => {
    setTopping(e.target.value);
  };

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleRadiusChange = (e) => {
    setRadius(e.target.value);
  };

  const calcVolume = (event) => {
    // Prevent submitting
    event.preventDefault();

    if (width === 0 || height === 0 || length === 0) {
      alert('Please enter a valid length, width, and height');
    } else {
      let baseVolume = width * height * length;
      let multiplier = 1;

      if (topping === "in") {
        multiplier = 2;
      } else if (topping === "m") {
        multiplier = 3;
      } else if (topping === "ft") {
        multiplier = 4;
      }

      let finalVolume = baseVolume * multiplier;
      setVolume(finalVolume);
    }
  };

  const reload = () => {
    window.location.reload();
  };

  const showRectangularTankForm = () => {
    document.getElementById("s").style.backgroundColor="#FDE0DC";
    document.getElementById("r").style.backgroundColor="white";
    

   
    // var property = document.getElementById(btn);
    setSelectedTank('rectangular');

    
  };
 

  const showSphericalTankForm = () => {
    setSelectedTank('spherical');
    document.getElementById("r").style.backgroundColor="#FDE0DC";
    document.getElementById("s").style.backgroundColor="white";
    
  };


  const calcVolumeSphere = (event) => {
    // Prevent submitting
    event.preventDefault();

    if (radius === 0 || height === 0 ) {
      alert('Please enter a valid length, width, and height');
    } else {
      let baseVolume = 3.14 * ( 2*radius-height)*( 2*radius-height) * (3*radius-( 2*radius-height) ) /3;
      let multiplier = 1;

      if (topping === "in") {
        multiplier = 2;
      } else if (topping === "m") {
        multiplier = 3;
      } else if (topping === "ft") {
        multiplier = 4;
      }

      let finalVolume = baseVolume * multiplier;
      setVolume(finalVolume);
    }
  };




  return (
    <div>
      <section id="pinkc">
        <div>About our products</div>
          <Navbar/>
        <div className="reviewoftank">
          <h1>Review</h1>
          <hr />
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam, consequuntur accusantium magni debitis fuga exercitationem facilis nesciunt ea explicabo reiciendis dolorem delectus recusandae neque voluptas repudiandae dolores dolore eveniet.</p> */}
          <ul  className="list-goals"  >
            <li> <img className='ulimage' src="./assest/arrow.png" alt=" not found .." /> 100% purebred</li>
            <li><img className='ulimage' src="./assest/arrow.png" alt=" not found .." />best quality food and decorative item </li>
            <li><img className='ulimage' src="./assest/arrow.png" alt="not found .." />  secure delivery service </li>
            <li><img className='ulimage' src="./assest/arrow.png" alt="not found .." /> Replacement garenty on each products  </li>
          </ul>
          
          
          
        </div>

        <div className="volumeoftank">
          <div className="btnofscale">
            <button id='r' className='rectangularbtn' type='button' onClick={showRectangularTankForm}>rectangular tank</button>
            <button  id='s'  className='rectangularbtn defaultshpere' type='button' onClick={showSphericalTankForm}>spherical tank</button>
          </div>

          <div className="radiounitbtn">
            <h3>Unit of measurement </h3>
            <input
              type="radio"
              name="topping"
              value="in"
              id="inch"
              checked={topping === "in"}
              onChange={onOptionChange}
            />
            <label htmlFor="inch">in</label>

            <input
              type="radio"
              name="topping"
              value="m"
              id="meter"
              checked={topping === "m"}
              onChange={onOptionChange}
            />
            <label htmlFor="meter">m</label>

            <input
              type="radio"
              name="topping"
              value="ft"
              id="foot"
              checked={topping === "ft"}
              onChange={onOptionChange}
            />
            <label htmlFor="foot">ft</label>

            <p>
              Selected unit: <strong>{topping}</strong>
            </p>
          </div>

          <div className={selectedTank === 'rectangular' ? "inputvaluesrect" : "inputvaluesrect hidden"}>
            <form onSubmit={calcVolume}>
              <div>
                <label>Length (meter)</label>
                <input type="number" value={length} onChange={handleLengthChange} />
              </div>

              <div>
                <label>Width (meter)</label>
                <input type="number" value={width} onChange={handleWidthChange} />
              </div>

              <div>
                <label>Height (meter)</label>
                <input type="number" value={height} onChange={handleHeightChange} />
              </div>

              <div className="submitionbtn">
                <button className='resultbtn submitbtn' type="submit">SUBMIT</button>
                <button className='resultbtn resetbtn' type="button" onClick={reload}>RESET</button>
              </div>

              <div>
                <label>Volume (m^3)</label>
                <input type="text" value={volume} readOnly />
              </div>
            </form>
          </div>

          <div className={selectedTank === 'spherical' ? "inputvaluessphere" : "inputvaluessphere hidden"}>
            <form onSubmit={calcVolumeSphere}>
              <div>
                <label>Radius </label>
                <input type="number" value={radius} onChange={handleRadiusChange} />
              </div>

              <div>
                <label>Height (meter)</label>
                <input type="number" value={height} onChange={handleHeightChange} />
              </div>

              <div className="submitionbtn">
                <button className='resultbtn submitbtn' type="submit">SUBMIT</button>
                <button className='resultbtn resetbtn' type="button" onClick={reload}>RESET</button>
              </div>
            </form>
           
            <div className="volumeresult">
            <div>
                <label>Volume (m^3)</label>
                <input type="text" value={volume} readOnly />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolumeC;
