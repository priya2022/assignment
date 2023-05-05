import React, { useRef } from 'react'
import './DStyle.css'

const Specification = () => {

  
  const ref = useRef('null')
  const button= useRef('')

  const handleChange =()=>{
    if(ref.current.style.dispay === "none")
    {
      button.current.innerHTML = "Read More"
      ref.current.style.display ="none"
    }
    else{
      button.current.innerHTML = "Read Less"
      ref.current.style.display ="inline"
    }
    
  }
  return (
    <div>
    <div className="card newCard main">
    <ul>
    

    
<h2 className='card-title'>About This Item</h2>

<li> Camera: 108 MP Main Camera with EIS; 2MP Depth-Assist Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP</li> 
<li> Rear Camera Mode: Hi-res 108MP mode, 3x Lossles Zoom, Photo, Video, Nightscape, Expert, Panoramic, Portrait, Macro,Time-lapse,</li>  
<div ref = {ref} className="more">
 <li> Slow-motion, Long exposure, Dual-view video, Text Scanner, 1080p/720p@30fps, Video zoom: 1080P@30fps,720P@30fps,</li>  
<li> Slow motion:  720P@120fps, Time-Lapse: 1080P@30fps, Steady Video EIS support</li> 
<li> Display: 6.72 Inches; 120 Hz Adaptive refresh rate; FHD+(1080×2400), Colors: 16.7 Million colors, 391 ppi, Aspect Ratio: 20:9, </li> 
<li> Brightness: 550 nits (typical), 680 nits (HBM)</li> 
<li> Operating System: Oxygen OS based on Android 13.1</li> 
<li> Processor: Qualcomm Snapdragon 695 5G</li> 
<li> Battery & Charging: 5000 mAh with 67W SUPERVOOC Endurance Edition  </li>
</div>

      <button className='btn btn-primary'ref={button} onClick={handleChange}>Read More</button>
    </ul>
</div>
    </div>
  )
}

export default Specification