import Head from 'next/head'
import React, { Component } from 'react';
import Speech from '../utils/speech'
class App extends Component {

    componentDidMount () {
        const speechRec = new App();
        // add service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                    .register('./service-worker.js')
                    .then(function() { console.log('Service Worker Registered'); });
        }
    }
    render(){
    return(
        <div>
            <Head>
            <link rel='stylesheet' href='/static/stylesheets/style.css' />
            </Head>
            <body>
                <div>
                    <h1>Speech Recognition</h1>
                </div>
            </body>
        </div>
        )
    }
}
export default App;