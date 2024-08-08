import { Children, useState } from 'react';
// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// CUSTOM ICON COMPONENTS
import ChevronLeft from '@/icons/ChevronLeft';
import ChevronRight from '@/icons/ChevronRight';
// STYLED COMPONENT
import { SwiperContainer } from './styles';

// ==============================================================

// ==============================================================

export default function Carousel({
  children,
  navigation,
  pagination,
  thumbsSwiper,
  ...props
}) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);
  return <SwiperContainer>
      <Swiper spaceBetween={0} autoplay={{
      delay: 2500
    }} thumbs={{
      swiper: thumbsSwiper
    }} modules={[Navigation, Pagination, Autoplay, A11y]} navigation={navigation ? {
      prevEl,
      nextEl
    } : false} pagination={pagination ? {
      clickable: true,
      el: paginationEl
    } : false} {...props}>
        {Children.map(children, child => <SwiperSlide>{child}</SwiperSlide>)}
      </Swiper>

      <div className="swiper-controls">
        {/* =============custom navigation ============= */}
        {navigation ? <div className="swiper-navigation">
            <div role="button" ref={node => setPrevEl(node)} className="swiper-button swiper-button-prev">
              <ChevronLeft />
            </div>

            <div role="button" ref={node => setNextEl(node)} className="swiper-button swiper-button-next">
              <ChevronRight />
            </div>
          </div> : null}

        {/* ============= custom pagination =============*/}
        {pagination ? <div className="swiper-pagination" ref={node => setPaginationEl(node)} /> : null}
      </div>
    </SwiperContainer>;
}