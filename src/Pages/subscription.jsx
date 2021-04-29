import React from 'react'
import SubNav from '../Component/subNav'
import SubHero from '../Component/subHero'
import Footer from '../Component/footer'

class Subscription extends React.Component {
    render() {
        return(
            <div>
                <SubNav />

                <SubHero />

                <Footer />
            </div>
        )
    }
}

export default Subscription;