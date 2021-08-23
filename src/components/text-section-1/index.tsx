import { tw } from 'twind';

const TextSection1 = () => (
  <section className={tw(`mx-auto max-w-7xl`)}>
    <div className={tw(`w-full items-center`)}>
          <h4 className={tw(`max-w-5xl font-sans font-semibold text-3xl md:text-3xl lg:text-4xl text-left text-black-700`)}>
          What do people think of my brand? <br/>
          Who are my consumers and where can I find them? <br/>
          What kind of communication will resonate with my target audience?
          </h4>
    </div>
  </section>
);

export default TextSection1;
