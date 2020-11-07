import React from 'react'

import '../../../../assets/sass/_Box.scss'


function Box({ src, text, className }) {
    return (
        <div className={className}>
            <img src={src} alt='box' />
            <p>{text}</p>
        </div>
    )
}

export default Box
