import React, { useEffect } from 'react';
import $ from 'jquery';
import profile from '../img/profile.jpg';

const words = [
  'Web developer',
  'Font-end developer',

];

function wordflick() {
  let i = 1;
  let offset = 1;
  let forwards = true;
  let skip_count = 0;
  const skip_delay = 15;
  const speed = 70;

  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count === skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset === 1) {
        forwards = true;
        i++;
        offset = 1;
        if (i >= words.length) {
          i = 0;
        }
      }
    }
    const part = words[i].substr(0, offset);
    if (skip_count === 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $('.word').text(part);
  }, speed);
}

function Hero() {
  useEffect(() => {
    wordflick();
  }, []);

  return (
    <div className="hero bg-primary d-flex align-items-center mb-5 py-5" id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
            <img className="profile rounded-circle shadow-sm" src={profile} alt="Profile" />
          </div>
          <div className="what_name col-lg-7 text-center">
            <h3 className="text-white font-weight-normal mb-3 hero-text ">I'm</h3>
            <h1 className="display-3 mb-2">Ratchanon Jiamjamnong</h1>

            <div className="word  hero-text"></div>
       
            <div className="resume align-items-center">
              <a href="#" className="btn btn-outline-light resume">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
