import profile from '../img/profile.jpg'

import project1 from '../img/project1.png'
import project2 from '../img/project2.png'
import project3 from '../img/project2.png'



function Project() {

return(
    <div>
        <section className="">
          <div className="container-fluid pt-5" id="service">
            <div className="container">
              <div className="">
                <h1 className="font_stoke">Project</h1>
              </div>
              <div className="row pb-3">
                <div className="col-lg-4 col-md-6 text-center mb-5">
                  <div className="">
                    <i className=""></i>
                    <h4 className="font-weight-bold m-0">Senior project</h4>
                  </div>

                  <div className="col-md-12 text-center" >
                    <img src={project1} className='img_project' />
                  </div>

                  <p className='col-md-12 text-center'>LongDoo - Product and Service Trial System for Market Research</p>
                  <a className="col-md-12 text-center" href="https://github.com/kirito112a/Lomgdoo">Go to source code</a>
                </div>

                <div className="col-lg-4 col-md-6 text-center mb-5">
                  <div className="">
                    <i className=""></i>
                    <h4 className="font-weight-bold m-0">Cooperative education project</h4>
                  </div>
                  <div className="col-md-12 text-center" >
                    <img src={project2} className='img_project' />
                  </div>

                  <p className='col-md-12 text-center'>CoC Document</p>
                  <a className="col-md-12 text-center" href="https://ratchanon-coc-doc.netlify.app/">Go to Website</a>

                </div>

   
              </div>
            </div>
          </div>
        </section>


    </div>
);
}


export default Project;