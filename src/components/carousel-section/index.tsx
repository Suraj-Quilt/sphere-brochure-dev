import * as React from 'react';
import { tw, css } from 'twind/css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

let CardsArray = [
  {
    id: `#slide1`,
    name: `slide1`,
    title: `Brand Analysis`,
    body: `Sphere provides insights on what people think of your brand compared to competitors in the market. It also identifies the strengths and pain points of your products so that you can improve brand positioning.`,
    image: `/images/case-1.webp`,
  },
  {
    id: `#slide2`,
    name: `slide2`,
    title: `Category Insight`,
    body: `Sphere spots dominant and emerging moments of consumption in your category
          and suggests ways to engage
          with your target audience through strategic brand communications and unique product offerings.`,
    image: `/images/case-2.webp`,
  },
  {
    id: `#slide3`,
    name: `slide3`,
    title: `Content Analysis`,
    body: `Sphere reads and analyzes online conversations around a topic, deciphers who is driving the conversation, and who is engaging with it. Based on these insights, Sphere suggests ways
          to engage in these conversations such that it resonates with your target audience.`,
    image: `/images/case-3.webp`,
    alt: `Proident pariatur est.`,
  },
];

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


const CustomDot = ({
    index,
    onClick,
    active
  }) => {
    return (
      <a
        onClick={e => {
          onClick();
          e.preventDefault();
        }}
      >
        <svg height="50">
            <circle cx="10" cy="20" r="5" className={
            active ? 'custom-dot--active' : 'custom-dot'}
            fill={active ? 'blueviolet' : '#B4B4B4'}/>
        </svg>
      </a>
    );
  };


const CarouselSection = () => (
  <section className={tw(`mx-auto max-w-6xl py-20 items-center`)}>
    <h3 className={tw(`mb-12 font-sans font-medium text-xl md:text-xl lg:text-3xl text-left`)}>
      Here are some of the benefits of using Sphere:
    </h3>
    <div
      style={{
        paddingBottom: '30px',
      }}
    >
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
        {CardsArray.map((card, idx) => (
          <>
            <div
              id={card.id}
              className={tw(`w-full py-12 relative flex items-center bg-gray-100 rounded-lg`)}
              key={idx}
            >
              <div className={tw(`w-full lg:w-1/2`)}>
                <div className={tw(`max-w-md mx-auto`)}>
                  <h3 className={tw(`font-sans font-bold text-xl md:text-xl lg:text-3xl text-left text-purple-700`)}>
                    {card.title}
                  </h3>
                  <p className={tw(`mt-5 mr-16 text-center text-2xl lg:text-xl text-left`)}>{card.body}</p>
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
          </>
        ))}
      </Carousel>
    </div>
  </section>
);

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
