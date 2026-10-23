import { site_images } from '../site_images'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

export default function PressSection() {
  const reviews_data = [
    {
      id: 1,
      quote: '“Your one stop solution to feeling energised and focused.”',
      logo: site_images.press_forbes_logo,
      alt: 'Forbes'
    },
    {
      id: 2,
      quote: '“A revelation. Not just about looking better and feeling better. LYMA is about real health benefits.”',
      logo: site_images.press_daily_telegraph_logo,
      alt: 'The Daily Telegraph'
    },
    {
      id: 3,
      quote: '“Experts are queuing up to praise LYMA.”',
      logo: site_images.press_financial_times_logo,
      alt: 'Financial Times'
    },
    {
      id: 4,
      quote: '“Your one stop solution to feeling energised and focused.”',
      logo: site_images.press_forbes_logo,
      alt: 'Forbes'
    },
    {
      id: 5,
      quote: '“A revelation. Not just about looking better and feeling better. LYMA is about real health benefits.”',
      logo: site_images.press_daily_telegraph_logo,
      alt: 'The Daily Telegraph'
    },
    {
      id: 6,
      quote: '“Experts are queuing up to praise LYMA.”',
      logo: site_images.press_financial_times_logo,
      alt: 'Financial Times'
    }
  ]

  return (
    <section className="press_reviews_section">
      <div className="press_reviews_container">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 }
          }}
        >
          {reviews_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="press_quote_card">
                <h3 className="press_quote_text">{item.quote}</h3>
                <img className="press_media_logo" src={item.logo} alt={item.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
