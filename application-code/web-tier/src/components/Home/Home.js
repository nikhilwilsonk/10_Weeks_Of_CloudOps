
    import React, {Component} from 'react';
    import architecture from '../../assets/WebApp3Tier.png'

    class Home extends Component {
        render () {
        return (
            <div>
            <h1 style={{color:"white"}}>AZURE WEB APP 3 Tier Architecture</h1>
            <img src={architecture} alt="3T Web App Architecture" style={{height:400,width:825}} />
          </div>
        );
      }
    }

    export default Home;
