import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const AboutSection = () => (
  <section className={tw(`mx-auto max-w-7xl`)}>
    <div className={tw(`w-full py-24 relative flex items-center`)}>
      <div className={tw(`w-full lg:w-1/2 py-16 bg-purple-700 rounded-lg`)}>
        <div className={tw(`max-w-md mx-auto`)}>
          <h3 className={tw(`font-sans font-bold text-xl md:text-xl lg:text-3xl text-left text-gray-300`)}>About</h3>
          <p className={tw(`mt-5 mr-16 text-white text-center font-bold text-2xl lg:text-3xl text-left`)}>
            Sphere leverages the world’s first Culture AI to extract and analyze data from a variety of sources. Our AI
            is trained to read and analyze data with human empathy, emotion, and cultural context to create meaning and
            derive useful insights{' '}
          </p>
        </div>
      </div>
      <div className={tw(`w-full lg:w-1/2 mx-16`)}>
        <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
          <FeatureSvg width="70%" height="50%" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
