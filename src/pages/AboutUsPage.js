import { useState, useEffect } from "react";

import FsLightbox from "fslightbox-react";



export default function AboutUsPage() {

  const [slide, setSlide] = useState(false);

  return (
    <>
    <div className="aboutUs-container">

   
    <h1 className="title">About</h1>
    <div className="about">
      
      <p>Salem Crown Apartments are fully remodeled with newly painted walls, remodeled bathroom and kitchen, luxury vinyl plank floors, and newer appliances that consist of a stove, fridge and dishwasher. </p>
      <p>The features inside this apartment are above the rest! Individual Furnace Units, new windows and doors, 3 closets, laundry area, secure entrances, and state of the art security cameras. </p>
      <p>Conveniently located 2 miles downtown Dayton, and close to Kroger (2 miles) and Dayton Police Department (2 miles).</p>
      <p><strong>RTA stop right on the corner</strong> </p>
      <p>We strive to provide nice, clean, comfortable, and affordable housing for responsible residents! 27-unit apartment complex under new management (fully remodeled in 2018-2019)</p>
    </div>

    <h1 className="title">Testimonials</h1>
    <div classname = "reviews-container">


<div class="elfsight-app-b0b21a6b-fd53-4e3e-8341-31d8dddb7771 reviews"></div>

    </div>

     <h1 className = "title" >Virtual Tour</h1>
      <iframe className="virtual-tour"
                src="https://www.google.com/maps/embed?pb=!4v1672167750164!6m8!1m7!1sCAoSLEFGMVFpcE42WkZhcWhydG5waWxKVF9WYmhhUGdQdEg4bkNHTmRPb3FWaExu!2m2!1d39.7746093!2d-84.21754469999999!3f192.34562104242204!4f-14.765138178736677!5f0.4000000000000002"
                
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>,

      <div className="container">
       
        <h1 className="title">Gallery</h1>

        <div className="gallery" onClick={() => setSlide(!slide)}> 
          <figure className="gallery__item gallery__item--1">
            <img
              src="https://i.imgur.com/ILzD0HZ.jpg"
              class="gallery__img"
              alt="Kitchen"
            />
          </figure>

          <figure className="gallery__item gallery__item--2">
            <img
              src="https://i.imgur.com/R16jAox.jpg"
              className="gallery__img"
              alt="Bathroom"
            />
          </figure>

          <figure className="gallery__item gallery__item--3">
            <img
            
              src="https://i.imgur.com/MFPbkjh.jpg"
              className="gallery__img"
              alt="Living Room"
            />
          </figure>

          <figure className="gallery__item gallery__item--4">
            <img
              src="https://i.imgur.com/J4xLkW4.jpg"
              className="gallery__img"
              alt="Bedroom"
            />
          </figure>

          <figure className="gallery__item gallery__item--5">
            <img
              src="https://i.imgur.com/9Pc0exQ.jpg"
              className="gallery__img"
              alt="Bedroom2"
            />
          </figure>

          <figure className="gallery__item gallery__item--6">
            <img
              src="https://i.imgur.com/YUamIMj.jpg"
              className="gallery__img"
              alt="Dining"
            />
          </figure>

          <figure className="gallery__item gallery__item--7">
            <img
              src="https://i.imgur.com/U1Mtm2b.jpg"
              className="gallery__img"
              alt="Outside"
            />
          </figure>

          <figure className="gallery__item gallery__item--8">
            <img
              src="https://i.imgur.com/CwSBvsh.jpg"
              className="gallery__img"
              alt="Floor Plan"
            />
          </figure>





        </div>
        <iframe className = "map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.4376179754076!2d-84.2196212846235!3d39.77473347944482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884081c5961332e7%3A0xe38cbd36b306e837!2sSALEM%20CROWN%20APARTMENTS!5e0!3m2!1sen!2sus!4v1672364214381!5m2!1sen!2sus" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>


      <FsLightbox
            toggler={slide}
            sources={[
       
        
"https://i.imgur.com/ILzD0HZ.jpg",
"https://i.imgur.com/R16jAox.jpg",
"https://i.imgur.com/MFPbkjh.jpg",
"https://i.imgur.com/J4xLkW4.jpg",
"https://i.imgur.com/9Pc0exQ.jpg",
"https://i.imgur.com/YUamIMj.jpg",
"https://i.imgur.com/CwSBvsh.jpg",
"https://i.imgur.com/U1Mtm2b.jpg"
            
            ]}
         />
          </div>
    </>
  );

}