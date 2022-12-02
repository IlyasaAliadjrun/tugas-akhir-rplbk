import React from 'react'

function Button({bText, bLink}) {
  return (
    <div>
        <a href={bLink} className='btn btn-primary btn-lg px-4 me-md-2'>{bText}</a>
    </div>
    
  )
}

export default Button
