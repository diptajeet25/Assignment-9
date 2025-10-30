import React from 'react';

const Carsoul = () => {
  return (
    <div className='w-7/10 mx-auto my-16 h-30  max' >
        <div className="carousel ">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://images.logicalincrements.com/gallery/1920/822/PUBG-wallpaper-1.jpeg"
      className="w-full h-[500px] object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://efootballchampionship.konami.net//media/items/014_efootball_championship-open_1200x320.jpg"
      className="w-full h-[500px] object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://www.hjackets.com/blog/wp-content/uploads/2020/02/Free-Fire-banner.jpg"
      className="w-full h-[500px] object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://images.squarespace-cdn.com/content/v1/58af450eb3db2b0582612f1d/1487970053506-HKU3SQ72R71BRUXEC9KR/clashofclans.png?format=1000w"
      className="w-full h-[500px] object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Carsoul;