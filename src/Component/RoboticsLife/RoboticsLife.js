import React, { useEffect } from 'react';
import './RoboticsLife.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RoboticsLife = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })  
  }, [])

  return (
    <>
    <section>
    <div className='bg-color'>
    <div className='bg'>
     <div className='txt align-center'>
      
      <div>
        <h1>we bring robots to life.</h1>
        <p>UmairKhan Robotics is an AI and Robotics company dedicated to creating socially intelligent machines that enrich the quality of our lives</p>
      </div>

     </div>
    </div>
    </div>

    </section>
      
    </>
  )
}

export default RoboticsLife
