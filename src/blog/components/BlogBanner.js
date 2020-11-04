import React from 'react'
import '../styles/blog.css'
import video from '../images/production ID_4065218.mp4'


function BlogBanner() {
  return (
    <header>
      <div className="a_homeslogan">
        <p className="lora">Inspiration of Creation</p>
        <p className="a_homesubslogan lora">
          A reinterpretation of inspiration for literary creation.
        </p>
      </div>
      <div className="a_video">
        <video
        src={video}
          class="w-100"
          autoplay="autoplay"
          muted="true"
          preload="auto"
        />
      </div>
    </header>
  )
}

export default BlogBanner