// import React, { Component } from 'react'
// import HeaderComponent from './Components/HeaderComponents/HeaderComponent'
// import Section from './Components/Section1/Section';

// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <HeaderComponent/>
//                 <Section />
//             </div>
//         )
//     }
// }
  
import React, { Component } from 'react'
import Faq from './FAQ/Faq'
import Footer from './Footer/Footer'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import Section5 from './Section5/Section5'

export default class App extends Component {
    render() {
        return (
            <div>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
                <Faq/>
                <Footer/>
            </div>
        )
    }
}
