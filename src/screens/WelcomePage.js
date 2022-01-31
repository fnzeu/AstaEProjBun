import React from "react";

import { Button } from "../components/Button";
import './WelcomePage.css'

function WelcomePage(){

    return (
        <section className='showcase'>
            <div className='showcase-overlay'>
                <div className='container'>
                    <h1 className='title'>We have what you are looking for</h1>
                        <p className='quote'>
                        "The cars we drive say a lot about us"
                        </p>
                    <Button buttonStyle='btn--primary' className='button' link='login'>GET STARTED</Button>
                </div>
            </div>
        </section>
    );

}

export default WelcomePage;