// Global Swiper re-exports
// This file provides a centralized location for importing Swiper components and modules
// Used by both Interactive component and @gravity-ui/page-constructor
// Note: Swiper CSS styles are imported in vendors.scss for SSR compatibility

// Re-export commonly used modules for convenience
export {A11y, Autoplay, EffectCreative, Navigation, Pagination, Scrollbar} from 'swiper/modules';
export {Swiper, SwiperSlide} from 'swiper/react';
export type {SwiperClass} from 'swiper/react';
