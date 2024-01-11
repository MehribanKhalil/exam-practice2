import React from 'react'

const Button = ({ children }) => {
    return (
        <button className=' bg-light-green py-2 px-5  text-main-color  hover:bg-hover-color transition'>
            {
                children
            }
        </button>
    )
}

export default Button