import React from 'react';
import Logotux from './Logotux';
import Navigation from './Navigation';


const Home = () => {
    return(
        <div className="Home">
            <Navigation />
            <br/>
            
            <h1>User Guide</h1>
            <p>Access the web interface on  http://localhost:3000/ or on the URL you defined in your deployment. On all the interface, you can fill the forms and the send button will call the backend rest api. The right part of the interface will display the return of the backend in JSON. </p>
            <p>You can directly access the backend API on http://localhost:5000 or on the URL you defined in your deployment. </p>


        </div>
    )
}

export default Home;