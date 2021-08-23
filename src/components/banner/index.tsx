import { tw, css } from 'twind/css';

const banner = css`
  background-image: url('/panel4.png');
  background-size: cover;
  margin-top: 50px;
  padding: 150px;
`;

const BannerSection = () => (
  <section className={tw(banner)}>
    <div className={tw(`mx-auto max-w-7xl`)}>
      <div className={tw(`w-full items-center py-16 border-white p-4 bg-opacity-75 bg-white rounded`)}>
        <h4 className={tw(`max-w-5xl px-8 py-12 font-sans font-semibold text-2xl md:text-2xl lg:text-2xl text-left text-black-700`)}>
        Sphere helps you answer these questions and more.
        Whether you want to get a peek into the mind of your consumers through the digital spaces they inhabit, improve brand communications, or A/B test ads, Sphere can help you target your ideal customers in a meaningful and effective way. 
        </h4>
      </div>
    </div>
  </section>
);

export default BannerSection;
