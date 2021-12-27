import React from 'react'
import Content1 from './Content1'
import Header from './Header'
import "./Section1.css"

const Section1 = () => {
    return (
        <section className="bgimage">
            <section className="sec1">
                <article>
                    <Header/>
                    <Content1/>
                </article>
            </section>
        </section>
    )
}

export default Section1
