import React from 'react';

const SpecialOffers = () => (
  <div className="container border-0">
    <h4 className="light-text text-white">SPECIAL OFFERS</h4>
    <div className="row">
      <div className="container border-0 col-3">
        <img src="https://cdn.akamai.steamstatic.com/steam/spotlights/575f700440b72c28f17414b2/spotlight_image_english.jpg" alt="" className="img-fluid" />
        <h3 className="light-text text-white">MIDWEEK DEAL</h3>
        <a className="light-text text-white">offer ends Feb 22 @ 8:00 AM</a>
        <div className="nav-item green-rectangle p-1">
          <h1>UP TO -95%</h1>
        </div>
      </div>
      <div className="container border-0 col-3">
        <img src="https://cdn.akamai.steamstatic.com/steam/spotlights/69e7f6a95aabe1edf52cd732/spotlight_image_english.jpg" alt="" className="img-fluid" />
        <h3 className="light-text text-white">MIDWEEK DEAL</h3>
        <a className="light-text text-white">offer ends Feb 22 @ 8:00 AM</a>
        <div className="nav-item green-rectangle p-1">
          <h1>UP TO -95%</h1>
        </div>
      </div>
      <div className="container border-0 col">
        <div>
          <img src="https://cdn.akamai.steamstatic.com/steam/apps/702670/header.jpg" alt="" className="img-fluid" />
          <div className="d-flex align-items-center">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h3 className="light-text text-white">Today's Deal</h3>
            <a className="nav-item green-rectangle p-1 text-decoration-none text-reset">UP TO -70%</a>
          </div>
        </div>
        <div>
          <img src="https://cdn.akamai.steamstatic.com/steam/apps/1584090/header.jpg" alt="" className="img-fluid" />
          <div className="d-flex align-items-center">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h3 className="light-text text-white">Today's Deal</h3>
            <a className="nav-item green-rectangle p-1 ml-2 text-decoration-none text-reset">UP TO -40%</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { SpecialOffers };
