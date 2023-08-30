import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar.jpg'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
// import required modules
import { Pagination} from "swiper";

const data = [

  // =========ADD TESTIMONIALS HERE============
  {
    avatar: AVTR1,
    name: 'John Doe',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus error, laboriosam atque perspiciatis amet numquam beatae voluptatum voluptates similique fugiat cupiditate veniam hic autem molestiae nemo sit sequi reprehenderit quisquam."
  },
  {
    avatar: AVTR2,
    name: 'Orlando Hill',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus error, laboriosam atque perspiciatis amet numquam beatae voluptatum voluptates similique fugiat cupiditate veniam hic autem molestiae nemo sit sequi reprehenderit quisquam."
  },
  {
    avatar: AVTR3,
    name: 'Anthony Gordon',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus error, laboriosam atque perspiciatis amet numquam beatae voluptatum voluptates similique fugiat cupiditate veniam hic autem molestiae nemo sit sequi reprehenderit quisquam."
  }
]
const Testimonials = () => {
  return (
   <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" pagination={{ clickable: true }} modules={[Pagination]}  >
        {
          data.map(({ avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="avatar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'> {review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
   </section>
  )
}

export default Testimonials
