import Head from 'next/head'
import React, { Component } from 'react';

class App extends Component {

    componentDidMount () {

        // add service worker
        // if ('serviceWorker' in navigator) {
        //     navigator.serviceWorker
        //             .register('./lib/service-worker.js')
        //             .then(function() { console.log('Service Worker Registered'); });
        // }
    }
    render(){
    return(
        <div>
            <Head>
            <link rel='stylesheet' href='/static/stylesheets/style.css' />
            </Head>
            <div>
                <div>
                    <h1>Speech Recognition</h1>
                </div>
                <div className="container">
                    <div className="text-box" contentEditable="true"></div>
                    <i className="fa fa-microphone"></i>
                    <select id="voiceSelect"></select>
                </div>
                <audio className="sound" src="/static/sound/chime.mp3"></audio>
            </div>
        </div>
        )
    }
}
