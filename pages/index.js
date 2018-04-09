import Head from 'next/head'
import React, { Component } from 'react';
import {Speech} from '../utils/speech'
export default class Index extends React.Component {


    componentDidMount () {
        var s = new Speech()    
    }
    render(){
    return(
        <div>
            <Head>
            <link rel='stylesheet' href='/static/stylesheets/style.css' />
            <link  rel="stylesheet"  href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.1.0/font-awesome-animation.css'/>
            </Head>
            <div>
                <div>
                    <h1>Speech Recognition</h1>
                </div>
                <div className="container">
                    <div className="text-box" contentEditable="true"></div>
                    <i className="fa fa-play faa-horizontal animated"></i>
                    <select id="voiceSelect"></select>
                </div>
                <audio className="sound" src="/static/sound/chime.mp3"></audio>
            </div>
        </div>
        )
    }
}
