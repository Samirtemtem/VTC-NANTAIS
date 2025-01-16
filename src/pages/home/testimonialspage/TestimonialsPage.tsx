import React, { useEffect, useState } from "react";
import {
  TestimonialsPageContainer,
  TestimonialsPageWrapper,
} from "./TestimonialsPage.styles";
import CustomerReview from "./customereview/CustomerReview";
import { getTestimonials, Testimonial } from "./TestimonialsData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const loadTestimonials = async () => {
      const reviews = await getTestimonials();
      setTestimonials(reviews);
    };

    loadTestimonials();
  }, []);

  if (testimonials.length === 0) {
    return null; // or a loading spinner
  }

  return (
    <TestimonialsPageWrapper>
      <TestimonialsPageContainer>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          draggable={false}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <CustomerReview 
                name={testimonial.name}
                text={testimonial.text}
                url={testimonial.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialsPageContainer>
    </TestimonialsPageWrapper>
  );
};

export default TestimonialsPage;
