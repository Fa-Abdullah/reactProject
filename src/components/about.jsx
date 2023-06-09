import React from 'react'
import ground from '../carsImgs/ground.png';
import road from '../carsImgs/carOnGround-removebg-preview.png';
import './about.css';

const About = () => {

  // if (document.querySelector('#about').getBoundingClientRect().top <= 200) {
  //   return null;  
  // }

  return (
    <React.Fragment>
      <div id='about' ref={About}>
        <div className='aboutcont' style={{}}>
            <div className='aboutmin' style={{}}>
                <p className='ABOUT' style={{}}>
                    ABOUT US
                </p>
                <p className='about' style={{}}>
                    About
                </p> 
                <p  className='p' style={{}}>
                  YourCar is a luxury car dealership that offers a personalized and 
                  first-class experience to its clients. Our team of experienced 
                  professionals is dedicated to providing exceptional service and 
                  finding the perfect vehicle to match our clients' unique 
                  preferences and requirements. We have an extensive selection 
                  of high-end vehicles, ranging from sports cars to SUVs, all of 
                  which are maintained to the highest standards of quality and 
                  safety.<br/><br/><br/>

                  At YourCar, we are committed to creating a stress-free and 
                  enjoyable car buying experience. We understand that 
                  purchasing a luxury car can be a significant investment, which is 
                  why we offer flexible financing options to make the process 
                  more manageable. Our team is available to answer any 
                  questions and provide guidance throughout the entire buying  
                  process. We take pride in our outstanding customer service and 
                  attention to detail, and we are confident that our clients will be 
                  satisfied with their experience at YourCar.
                </p>
            </div>
            <div className='imgsCol' style={{}}>
              <br/><br/><br/><br/><br/>
              <img className='groundimg' src={ground} alt='' style={{}}/>
              <img className='roadimg' src={road} alt="" style={{}}/>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default About;