import { tw, css } from 'twind/css';
import Quote from '@/constants/svg/quote.svg';

const sectionStyle = css`
  background-color: #F5F5F7;
`;

let CardsArray = [
  {
    name: `Karina Miller`,
    designation: `Sr. HR Consultant`,
    image: `/images/social-1.webp`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec facilisis urna. Maecenas auctor ultrices justo, quis tempus leo cursus non. Praesent consectetur mi at lorem tempor fringilla a nec`,
    logo: `/quilt_logo_black.png`,
  },
  {
    name: `Karina Miller`,
    designation: `Sr. HR Consultant`,
    image: `/images/social-1.webp`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec facilisis urna. Maecenas auctor ultrices justo, quis tempus leo cursus non. Praesent consectetur mi at lorem tempor fringilla a nec`,
    logo: `/quilt_logo_black.png`,
  },
  {
    name: `Karina Miller`,
    designation: `Sr. HR Consultant`,
    image: `/images/social-1.webp`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec facilisis urna. Maecenas auctor ultrices justo, quis tempus leo cursus non. Praesent consectetur mi at lorem tempor fringilla a nec`,
    logo: `/quilt_logo_black.png`,
  },
  {
    name: `Karina Miller`,
    designation: `Sr. HR Consultant`,
    image: `/images/social-1.webp`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec facilisis urna. Maecenas auctor ultrices justo, quis tempus leo cursus non. Praesent consectetur mi at lorem tempor fringilla a nec`,
    logo: `/quilt_logo_black.png`,
  },
];

const TestimonialSection = () => (
  <section className={tw(sectionStyle)}>
    <div className={tw(`mx-auto max-w-7xl py-20 items-center`)}>
      <h3 className={tw(`mb-12 font-sans font-medium text-xl md:text-xl lg:text-3xl text-left`)}>Testimonials</h3>
      <div className={tw(`grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-flow-row gap-2`)}>
        {CardsArray.map((card, idx) => (
          <>
            <div className={tw(`p-8 m-2 bg-white gap-8 flex flex-row rounded-lg`)}>
              <div className={tw(`w-1/2 inline-flex flex-col justify-between px-2`)}>
                <div>
                  <img
                    src={card.image}
                    className={tw(`h-48 mx-auto rounded-full`)}
                  />
                </div>
                <div>
                  <img src={card.logo} className={tw(`mx-auto object-fit overflow-hidden`)} width={150} height={150} />
                </div>
              </div>
              <div className={tw(`w-1/2 inline-flex flex-col justify-between px-2 mx-auto`)}>
                <div>
                  <Quote className={tw(`w-16 mb-4`)} />
                  <p className={tw(`font-sans font-medium text-xl md:text-xl lg:text-lg text-left`)}>{card.text}</p>
                </div>
                <div>
                  <p className={tw(`mt-8 mr-16 text-center text-lg lg:text-lg text-left`)}>
                    {card.name + ', ' + card.designation}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
