import React from 'react'
import './modal.css'

const Content = ({contents}) => (
  <div>  
     <div> 
      <img src={contents.images.downsized_large.url} alt="Sad Face"/>
    </div>
    <div> 
      User Name: { contents.user.display_name } 
    </div>
    <div> 
      Rating: { contents.rating } 
    </div>
  </div> 
)

const Modal = ({show, contents, closeModal}) => (
  <div 
    className = { show ? "Modal_Container" : "Modal_Container_Hide" }
    onClick   = { closeModal }
  >
    <div className="Modal">
      { 
        contents &&
        <Content contents={contents}/>   
      }
    </div>  
  </div>
)

export default Modal