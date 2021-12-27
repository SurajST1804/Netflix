import React from 'react'
import "./Faq.css"
const Faq = () => {
    return (
        <div id="faq">
            <div>
                <h1>Frequently Asked Questions</h1>
                <p>What is Netflix?<i class="fas fa-plus"></i></p>
                <p className="faq2">How much does does Netflix cost?<i class="fas fa-plus"></i></p>
                <p className="faq2">Wher can I watch?<i class="fas fa-plus"></i></p>
                <p className="faq2">How do I cancel?<i class="fas fa-plus"></i></p>
                <p className="faq2">What can I watch on Netflix?<i class="fas fa-plus"></i></p>
                <p className="faq2">Is Netflix good for kids?<i class="fas fa-plus"></i></p>
            </div> 
            <div id="member">
                <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                <input type="text" name="text" placeholder="Email address"></input>
                <button>Get Started       <i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
    )
}

export default Faq
