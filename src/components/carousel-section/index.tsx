import * as React from 'react';
import { tw } from 'twind/css';
import Carousel from 'react-multi-carousel';
import { DotProps } from 'react-multi-carousel/lib/types';
import 'react-multi-carousel/lib/styles.css';
import { attributes } from '../../../content/pages/benefits.md';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CustomDot = ({ onClick, active }: DotProps) => {
  return (
    <a onClick={() => onClick!()}>
      <svg height="50">
        <circle
          cx="10"
          cy="20"
          r="5"
          className={active ? 'custom-dot--active' : 'custom-dot'}
          fill={active ? 'blueviolet' : '#B4B4B4'}
        />
      </svg>
    </a>
  );
};

const CarouselSection = () => {
  let { benefits_list } = attributes;
  return (
    <section className={tw(`mx-auto max-w-6xl py-20 items-center`)}>
      <h3 className={tw(`mb-12 font-sans font-medium text-xl md:text-xl lg:text-3xl text-left`)}>
        Here are some of the benefits of using Sphere:
      </h3>
      <div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots
          renderDotsOutside={true}
          customDot={<CustomDot />}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          arrows={false}
        >
          {benefits_list.map((card, idx) => (
            <>
              <div id={card.id} className={tw(`w-full py-12 flex bg-gray-100 rounded-lg`)} key={idx}>
                <div className={tw(`w-full lg:w-1/2 flex flex-col justify-evenly pl-8`)}>
                  <div>
                    <h3 className={tw(`font-sans font-bold text-xl md:text-xl lg:text-3xl text-left text-purple-700`)}>
                      {card.card_heading}
                    </h3>
                  </div>
                  <div>
                    <p className={tw(`mr-16 text-2xl lg:text-xl text-left`)}>{card.card_body}</p>
                  </div>
                </div>
                <div className={tw(`w-full lg:w-1/2 mx-16`)}>
                  <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
                    <img
                      src={card.card_image}
                      className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselSection;

/* {CardsArray.map((card) => (
    <>
    <div className="carousel-item opacity-0" style={{height:"50vh"}} checked="checked">
       <div id={card.id} className={tw(`w-full py-12 relative flex items-center bg-gray-100 border-black border-4 p-8 rounded-lg`)}>
       <div className={tw(`w-full lg:w-1/2`)}>
         <div className={tw(`max-w-md mx-auto`)}>
           <h3 className={tw(`font-sans font-bold text-xl md:text-xl lg:text-3xl text-left text-purple-700`)}>
             {card.title}
           </h3>
           <p className={tw(`mt-5 mr-16 text-center text-2xl lg:text-xl text-left`)}>
           {card.body}
           </p>
         </div>
       </div>
       <div className={tw(`w-full lg:w-1/2 mx-16`)}>
         <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
         <img
                src={card.image}
                className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                width={400}
                height={300}
              />
         </div>
       </div>
     </div>
     </div>
     </>
    ))} */
