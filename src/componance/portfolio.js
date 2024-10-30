import React, { useState } from 'react';
import '../App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';








function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [popupImage, setPopupImage] = useState(null);

  const gallery = [
    { id: 1, name: '13th National Conference on Information Technology Certificate', category: 'Certificate', imgages: require('../img/p-Cer1.jpg') },
    { id: 2, name: 'PSU Stratup Idea Challenge Certificate', category: 'Certificate', imgages: require('../img/p-Cer2.jpg') },
    { id: 3, name: 'Has taken part in the course DevLab 3', category: 'Certificate', imgages: require('../img/p-Cer3.png') },
    { id: 4, name: 'PSU Stratup Idea Challenge', category: 'Competition', imgages: require('../img/p-Startup1.jpg') },
    { id: 5, name: 'PSU Stratup Idea Challenge', category: 'Competition', imgages: require('../img/p-Startup2.jpg') },
    { id: 6, name: 'PSU Stratup Idea Challenge', category: 'Competition', imgages: require('../img/p-Startup3.jpg') },
    { id: 7, name: 'Research To Market 2020', category: 'Competition', imgages: require('../img/p-r2m2.jpg') },
    { id: 8, name: 'Research To Market 2020', category: 'Competition', imgages: require('../img/p-r2m3.jpg') },
    { id: 9, name: 'Research To Market 2020', category: 'Competition', imgages: require('../img/p-r2m4.jpg') },
    { id: 10, name: 'COC Boost camps', category: 'Activity', imgages: require('../img/p-Ac1.jpeg') },
    { id: 11, name: 'Tutoring activities for students to prepare for university', category: 'Activity', imgages: require('../img/p-Ac2.jpg') },
    { id: 12, name: 'Tutoring activities for students to prepare for university', category: 'Activity', imgages: require('../img/p-Ac3.jpg') },
    { id: 13, name: 'Singha R-SA SEA SAND STRONG', category: 'Volunteer', imgages: require('../img/p-sing1.jpg') },
    { id: 14, name: 'Singha R-SA SEA SAND STRONG', category: 'Volunteer', imgages: require('../img/p-sing2.jpg') },
    { id: 15, name: 'Singha R-SA SEA SAND STRONG', category: 'Volunteer', imgages: require('../img/p-sing3.jpg') },
  ];

  const filterProducts = () => {
    return filter === 'all' ? gallery : gallery.filter(item => item.category === filter);
  };

  const openPopup = (image) => {
    setPopupImage(image);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <section className="portfolio">
      <div className="container-fluid pt-5 pb-3" id="portfolio">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white font_stoke">Gallery</h1>
          </div>
          <div className="row">
            <div className="col-12 text-center mb-2">
              <ul className="list-inline mb-4" id="portfolio-flters">
                <li className="cat_btn btn-sm btn-outline-dark m-1" onClick={() => setFilter('all')}>All</li>
                <li className="cat_btn btn-sm btn-outline-dark m-1" onClick={() => setFilter('Certificate')}>Certificate</li>
                <li className="cat_btn btn-sm btn-outline-dark m-1" onClick={() => setFilter('Competition')}>Competition</li>
                <li className="cat_btn btn-sm btn-outline-dark m-1" onClick={() => setFilter('Volunteer')}>Volunteer</li>
                <li className="cat_btn btn-sm btn-outline-dark m-1" onClick={() => setFilter('Activity')}>Other</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container">
            <TransitionGroup className="product-container">
              {filterProducts().map(item => (
                <CSSTransition key={item.id} timeout={300} classNames="fade">
                  <div className="product col-lg-4 col-md-6 mb-4 portfolio-item" onClick={() => openPopup(item.imgages)}>
                    <div className="g_img mb-4">
                      <img src={item.imgages} className="rounded " alt={item.name} />
                      <p className="port_name">{item.name}</p>
                    </div>
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>

          <CSSTransition in={!!popupImage} timeout={300} classNames="popup" unmountOnExit>
            <div className="popup-overlay" onClick={closePopup}>
              <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={closePopup}>&times;</span>
                <img src={popupImage}  className="popup-image" />
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
