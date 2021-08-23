import { tw, css } from 'twind/css';
import FeatureSvg from '@/constants/svg/features.svg';

const backgroundStyle = css`
background-color: #F5F5F7
`;

const CardsSection = () => (
  <section className={tw(backgroundStyle)}>
      <div className={tw(`mx-auto max-w-7xl`)}>
    <div className={tw(`w-full py-12 relative flex items-center`)}>
      <div className={tw(`w-full lg:w-1/2 bg-white border-white border-4 p-8 rounded-lg`)}>
        <div className={tw(`max-w-md mx-auto`)}>
          <h3 className={tw(`font-sans font-bold text-xl md:text-xl lg:text-3xl text-left text-purple-700`)}>Empowering interface</h3>
          <p className={tw(`mt-5 mr-16 text-center text-2xl lg:text-xl text-left`)}>
          Sphere has an intuitive interface that empowers users to arrive at stronger and faster data-driven decisions within minutes. 
          Machine learning allows users to track shifts and movements over time and geographical regions.
          </p>
        </div>
      </div>
      <div className={tw(`w-full lg:w-1/2 mx-16`)}>
        <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
          <FeatureSvg width="70%" height="50%" />
        </div>
      </div>
    </div>
    <div className={tw(`w-full py-12 relative flex items-center`)}>
      <div className={tw(`w-full lg:w-1/2 bg-white border-white border-4 p-8 rounded-lg`)}>
        <div className={tw(`max-w-md mx-auto`)}>
          <h3 className={tw(`font-sans font-bold text-xl md:text-xl lg:text-3xl text-left text-purple-700`)}>Scale and speed</h3>
          <p className={tw(`mt-5 mr-16 text-center text-2xl lg:text-xl text-left`)}>
          Sphere users can tap into the internet across business functions, 
          be it for social listening to aid scale and speed or traditional research to extract actionable insights.
          </p>
        </div>
      </div>
      <div className={tw(`w-full lg:w-1/2 mx-16`)}>
        <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
          <FeatureSvg width="70%" height="50%" />
        </div>
      </div>
    </div>
    </div>
  </section>
);

export default CardsSection;
