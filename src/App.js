import React from 'react';
import './App.css';

import profile from './img/profile.jpg';
import profile2 from './img/p2.jpg'


import Hero from './componance/hero';
import Contact from './componance/contact';
import Portfolio from './componance/portfolio';
import Project from './componance/project'









import cmd_img from './img/_CMD.png';
import Win_img from './img/_WSet.png';
import word_img from './img/_Word.png';
import ex_img from './img/_Exel.png';
import ai_img from './img/_AI.png';
import data_img from './img/_data.png';

import java_img from './img/_Java.png';
import py_img from './img/_Py.png';
import html_img from './img/_HTML.png';
import js_img from './img/_JS.png';
import css_img from './img/_CSS.png';
import sql_img from './img/_sql.png';
import bt_img from './img/_Bootstrap.png';
import chart_img from './img/_chart.png';
import djanga_img from './img/_django-icon.jpg';
import react_img from './img/_react.png';



import soft1_img from './img/_positive.png';
import soft2_img from './img/_Flex.png';
import soft3_img from './img/_team.png';




function App() {
  return (
    <div className="App">
      {/*หัว */}
      <header >
        <nav id="primary-navigation" className="site-navigation">
          <div className="container">
            <div className="navbar-header page-scroll">

              <button type="button" className="navbar-toggle collapsed" data-target="#portfolio-perfect-collapse" aria-expanded="false" >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <a href="#hero" className="site-logo">   </a>

            </div>

            <div className="main-menu" id="portfolio-perfect-collapse">

              <ul className="nav navbar-nav navbar-right">

                <li className="page-scroll"><a href="#hero">Home</a></li>
                <li className="page-scroll"><a href="#about">About</a></li>
                <li className="page-scroll"><a href="#service">Service</a></li>
                <li className="page-scroll"><a href="#portfolio">Portfolio</a></li>
                <li className="page-scroll"><a href="#contact">Contact</a></li>

              </ul>

            </div>

          </div>
        </nav>
      </header>



      <React.StrictMode>
        <Hero />
      </React.StrictMode>

      {/*ปิดหัว */}


      {/*โปรไฟล์ 
      <div id="hero" className="hero" >
        <div className="container">
          <div className="row">

            <div className="whatname_1 col-md-6" >
              <h1>Ratchanon Jiamjamnong</h1>
              <div className="page-scroll">
                <p className="job-title">Web Developer</p>
                <a href="#contact" className="btn btn-fill ">Hire me</a>
                <div className="clearfix visible-xxs"></div>
                <a href="#portfolio" className="btn btn-border">Explore more</a>
              </div>
            </div>

            <div className="pro_1 col-md-10 text-right" >
              <img src={profile} />
            </div>
            <div className="pro_2 col-md-12 " >
              <img src={profile} />
            </div>


            <div className="whatname_2 col-md-6" >
              <h1>Ratchanon Jiamjamnong</h1>
              <div className="page-scroll">
                <p className="job-title">Web Developer</p>
                <a href="#contact" className="btn btn-fill ">Hire me</a>
                <div className="clearfix visible-xxs"></div>
                <a href="#portfolio" className="btn btn-border">Explore more</a>
              </div>
            </div>

          </div>
        </div>
      </div>
     */}

      <main id="main" className="site-main">
        {/*เกี่ยวกับ */}

        <section id="about" className="site-section section-about text-center about">



          <div className="container">



            <div className="col-md-6 text-right" >
              <img src={profile2} className='imgdd' />
            </div>

            <div className="about">
              <h1 >About</h1>

              <p className="about_text col-lg-6" >&nbsp;&nbsp;&nbsp; Bachelor's degree in Information Technology. Participated in the National Software Contest, presented a research paper at the National Conference on Information Technology, and competed in a startup competition. Previously worked freelance, focusing on frontend web development. Completed one year of active military service.

              </p>
              <p className="about_text col-lg-6" >&nbsp;&nbsp;&nbsp; Knowledgeable in web programming with languages such as Java, Python, JavaScript, CSS, and HTML, as well as frameworks including Django, React, Bootstrap, and Firebase.
              </p>

              <div className="row mb-3 about_detail">
                <div className="col-sm-3 py-2"><h5>Name: <span className="text-secondary">Raschanon Jiamjamnong</span></h5></div>
                <div className="col-sm-3 py-2"><h5>Birthday: <span className="text-secondary">26 February 2000</span></h5></div>
                <div className="col-sm-3 py-2"><h5>Degree: <span className="text-secondary">Bachelor</span></h5></div>
                <div className="col-sm-3 py-2"><h5>Phone: <span className="text-secondary">09 4949 2843</span></h5></div>
                <div className="col-sm-3 py-2"><h5>Email: <span className="text-secondary">toplion672@gmail.com</span></h5></div>

              </div>
              <br></br>


            </div>

          </div>
        </section>
        {/*ปิดเกี่ยวกับ */}

        <div className="" id="qualification">
          <div className="container">

            <div className='qulity row'>
              {/*การศึกษา */}
              <div className="col-lg-12"  >
                <h1 className="exp_head">My Education</h1>
                <div className="col-sm-12" >

                  <div className="col-sm-6"  >
                    <h5 className='exp_detail' >&#x2022; Bachelor (Information Technology)</h5>
                    <p className='exp_detail'>Prince of Songkla University Phuket Campus | 2018 - 2021</p>
                  </div>

                  <div className="col-sm-6" >
                    <h5 className='exp_detail'>&#x2022; High School</h5>
                    <p className='exp_detail'>Ban Yan Yao Municipal School | 2012 - 2017</p>
                  </div>


                </div>
              </div>
              <br></br>

              {/*ปิดการศึกษา */}

              {/*ประสบการณ์*/}
              <div className="col-lg-12"  >
                <h1 className="exp_head">My Expericence</h1>
                <div className="col-sm-12" >


                  <div className="col-sm-6">
                    <h5 className='exp_detail'>&#x2022; Freelance Web Developer</h5>
                    <p className='exp_detail'>Freelance Web Developer, specializing in frontend development. Responsible for building and optimizing user interfaces (January - July 2023)</p>
                  </div>

                  <div className="col-sm-6"  >
                    <h5 className='exp_detail'>&#x2022; National Software Contest</h5>
                    <p className='exp_detail'>Participated in the competition and qualified for semifinals the National Software Contest (NSC 2022).</p>
                  </div>


                  <div className="col-sm-6" >
                    <h5 className='exp_detail'>&#x2022; National Conference on Information Technology</h5>
                    <p className='exp_detail'> Has presented a research paper at 13th National Conference on Information Technology (NCIT).</p>
                  </div>

                  <div className="col-sm-6">
                    <h5 className='exp_detail'>&#x2022; Startup Thailand League</h5>
                    <p className='exp_detail' >Join the PSU Startup Idea Challenge boost camp Join the competition and qualify for the regional qualifier Startup Thailand League 2021.</p>
                  </div>



                  <div className="col-sm-6">
                    <h5 className='exp_detail'>&#x2022; Cooperative education</h5>
                    <p className='exp_detail'>Web developer Internship at Stoms Technology limited partnership.</p>
                  </div>



                  <div className="col-sm-6">
                    <h5 className='exp_detail'>&#x2022; Research To Market</h5>
                    <p className='exp_detail'>Participated in Research To Market 2020 (R2M 2020) activity at Prince of Songkla University Hat Yai Campus.</p>
                  </div>



                  <div className="col-sm-6">
                    <h5 className='exp_detail'>&#x2022; Active Duty Soldier</h5>
                    <p className='exp_detail'>It is an active duty military force from 1 November 2023 to 31 October 2024.</p>
                  </div>




                  <div className="col-sm-6">
                    <h5 className='exp_detail'>&#x2022; Volunteer</h5>
                    <p className='exp_detail'>Has a staff of the volunteer project Sing R-SA Sea Sand Strong at Siboya island.</p>
                  </div>




                </div>
              </div>
              {/*ประสบการณ์*/}



            </div>
          </div>
        </div>



        {/*ทักษะ */}
        <section className="col-">
          <div className="skill">
            <div className='container'>
              <h1 className='exp_head' >My Skills</h1>
              <div className="c_skill ">
                <h4>Computer skills</h4>
                <div className="skill_detail  "  >
                  <div className="row" >
                    <div className="col-sm-4">
                      <img src={cmd_img} className='skill-img' />
                      Command line
                    </div>
                    <div className="col-sm-4">
                      <img src={Win_img} className='skill-img' />
                      Windows Settings
                    </div>
                    <div className="col-sm-4">
                      <img src={word_img} className='skill-img' />
                      Microsoft Word
                    </div>

                    <div className="col-sm-4">
                      <img src={ex_img} className='skill-img' />
                      Microsoft Exel
                    </div>
                    <div className="col-sm-4">
                      <img src={ai_img} className='skill-img' />
                      Adobe Illustrator
                    </div>
                    <div className="col-sm-4">
                      <img src={data_img} className='skill-img' />
                      Data Studio
                    </div>
                  </div>
                </div>
              </div>

              <div className="p_skill ">
                <h4>Programing skills</h4>
                <div className='skill_detail'>
                  <div className="row" >
                    <div className="col-sm-4">
                      <img src={java_img} className='skill-img' />
                      JAVA
                    </div>
                    <div className="col-sm-4">
                      <img src={py_img} className='skill-img' />
                      Python
                    </div>
                    <div className="col-sm-4">
                      <img src={html_img} className='skill-img' />
                      HTML
                    </div>
                    <div className="col-sm-4">
                      <img src={js_img} className='skill-img' />
                      JavaScript
                    </div>
                    <div className="col-sm-4">
                      <img src={css_img} className='skill-img' />
                      CSS
                    </div>
                    <div className="col-sm-4">
                      <img src={sql_img} className='skill-img' />
                      SQL
                    </div>
                    <div className="col-sm-4">
                      <img src={bt_img} className='skill-img' />
                      Bootstrap
                    </div>
                    <div className="col-sm-4">
                      <img src={chart_img} className='skill-img' />
                      Chart.JS
                    </div>
                    <div className="col-sm-4">
                      <img src={djanga_img} className='skill-img' />
                      Django
                    </div>
                    <div className="col-sm-4">
                      <img src={react_img} className='skill-img' />
                      React
                    </div>

                  </div>
                </div>
              </div>



              <div className="s_skill ">
                <h4>Soft skills</h4>
                <div className='skill_detail'>
                  <div className="row" >
                    <div className="col-sm-4">
                      <img src={soft1_img} className='skill-img' />
                      Positive Attitude
                    </div>
                    <div className="col-sm-4">
                      <img src={soft2_img} className='skill-img' />
                      Flexibility and Adaptability
                    </div>
                    <div className="col-sm-4">
                      <img src={soft3_img} className='skill-img' />
                      Teamwork and Collaboration
                    </div>
                  </div>
                </div>
              </div>



            </div>

          </div>
        </section>
        {/*ปิดทักษะ */}

        {/*เผลงาน */}



        <React.StrictMode>
          <Project />
        </React.StrictMode>





        {/*รูปผลงาน */}
        <React.StrictMode>
          <Portfolio />
        </React.StrictMode>






        {/*ติดต่อ */}
        <React.StrictMode>
          <Contact />
        </React.StrictMode>

      </main>


    </div>
  );

}
export default App;

function Hello() {
  let hello = document.getElementById("hello")
  hello.textContent = "12345"
}

function Active() {
  var header = document.getElementById("portfolio-flters");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}

