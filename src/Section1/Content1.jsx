import React from 'react'

const Content1 = () => {
    return (
        <div className="content1">
            <h1>Unlimited movies, TV<br/> shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div>
                <input type="text" id="text" name="text" placeholder="Email address"></input>
                <button>Get Started     <i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
    )
}

export default Content1
