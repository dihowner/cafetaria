import React from 'react'

const AppLoader = () => {
    return (
        <div class="overlay">
            <div class="overlay__inner">
                <div class="overlay__content"><span class="spinner"></span></div>
            </div>
        </div>
    )
}

export default AppLoader