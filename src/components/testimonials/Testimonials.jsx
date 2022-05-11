import React from 'react'
import './testimonials.css'

// Swiperjs imports
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


const data = [
  {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSncmmqqEZ7dIwDpHmcdDZ3xHX-5NJNHFHsksqOmky_d4BmpUfgzmlK6z0InPcD6eFop6w&usqp=CAU',
    name: 'Rahul Misal',
    review: 'We re-did our website twice in a 12 month period. There was no comparison between the first company and Thrive. Professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with Thrive the first time I would not have had to do it twice.'
  },
  {
    avatar: 'https://studio95.me/assets/images/team1.jpg',
    name: 'Amol Mohite',
    review: 'I went to Thrive with a basic “feel” I wanted in a website. They helped flush out the visual layout and content. Thrive’s services are bargain when you weigh the cost versus the product you receive. I will be using them again in future endeavors. Thanks again!'
  },
  {
    avatar: 'https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg',
    name: 'Pranit Ingulkar',
    review: 'Thrive listened to everything we needed and wanted in a new website, then delivered it! Our new website is fun, exciting and easy to use for me and our audiences. I have gone through website redesigns before, and by far, this one was the easiest and least painful. I was listened to and respected through every step. We couldn’t be happier with our new website.'
  },
  {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL1498i1yufW3YIKdVicFOVgbk-ZbCeM_vYwKkfhqsUM8npKhwLD0vMza7WXZamXfLBsg&usqp=CAU',
    name: 'Pooja Sawant',
    review: 'The attention to detail with Thrive’s professional staff is incredible. The entire team has proven to be very innovative and will work with ideas that I have as well and think of new ways to bring more traffic to our site in ways I would never have considered. Their pricing structure is unique and logical saving me money and achieving measurable results at the same time. I cant recommend Thrive strongly enough and will happily use them for my next business venture as well.'
  },
  {
    avatar: 'https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg',
    name: 'James Bond',
    review: 'Our site is beautiful! It is easy to navigate. The support has been remarkable for WordPress; if I don’t understand something, or can’t accomplish a task, Thrive is very responsive and they lead me in the correct way. Thrive is an extremely talented web design company. We are amazed from where traffic to our site comes; we are a moderate sized nonprofit and now we are having global visitors.'
  }
]

const Testimonials = () => {


  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container mySwiper" pagination={true} modules={[Pagination]}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} alt="client" />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'> {review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials

