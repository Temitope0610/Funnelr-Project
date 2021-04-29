import React from 'react'
import HomeNavbar from '../Component/HomeNavbar'
import HomeHerobox from '../Component/HomeHerobox'
import HomeSales from '../Component/HomeSales'
import HomeFunnelr from '../Component/HomeFunnelrSection'
import HomeChatbot from '../Component/HomeChatbot'
import HomeFeatures from '../Component/HomeFeatures'
import HomePricing from '../Component/HomePricing'
import Footer from '../Component/footer'



class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeNavbar />
                
                <HomeHerobox /> 

                <HomeSales />

                <HomeFunnelr />

                <HomeChatbot />

                <HomeFeatures />

                <HomePricing />

                <Footer />
            </div>
        )
    }
}




export default Home;