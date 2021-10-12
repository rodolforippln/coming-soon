import Layout from "../components/Layout"
import Countdown from "../components/Countdown"

import '../styles/global'

function Index (){
    return (
        <div className="App">
            <div className="container">
                <h1>
                    Website
                    <br />
                    Coming Soon
                </h1>
                <Layout>

                    <Countdown />
                </Layout>
                <h5>Muitas novidades em breve. Aguarde!</h5>
            </div>
      

        </div>
    )
}

export default Index