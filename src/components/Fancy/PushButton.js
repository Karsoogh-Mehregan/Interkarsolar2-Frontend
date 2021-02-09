import React from 'react'

const PushButton = ({ text, color, onClick }) => {
    return (
        <div className='fancyPushButton'>
            <button onClick={onClick} class={`${color} loading-button`}>{text}</button>
        </div>
    )
}

export default PushButton;