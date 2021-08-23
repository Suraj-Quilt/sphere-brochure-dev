import { tw, css } from 'twind/css';
import Arrow from '@/constants/svg/arrow.svg';

const sectionStyle = css`
  background-color: #F5F5F7;
`;

const articles = [
  {
    title: `Text Analysis`,
    body: `Key-phrase extraction, language detection and translation, spam filtering and sentiment analysis, allowing you to filter out the noise in your data and focus on what counts.`,
    image: `/images/case-1.webp`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Image Analysis`,
    body: `Identify colours, emotions, objects, country of origin, and apply semiotics to aid interpretation of both conscious and unconscious signs and signifiers.`,
    image: `/images/case-2.webp`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Video Analysis`,
    body: `Frame-by-frame image analytics, allowing you to measure nuanced emotional responses in viewers across time, from joy to sadness to fear.`,
    image: `/images/case-3.webp`,
    alt: `Proident pariatur est.`,
  }
];

const CasesSection = () => (
  <section className={tw(sectionStyle)}>
    <div className={tw(`w-full py-20`)}>
      <div className={tw(`w-full overflow-hidden`)}>
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto lg:pt-20`)}>
        <div className={tw(`mx-auto`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                )}
              >
                <div className={tw(`h-250 z-20`)}>
                  <img
                    src={article.image}
                    alt={article.alt}
                    className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                    width={400}
                    height={300}
                  />
                </div>
                <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                  <p className={tw(`uppercase text-sm text-purple-600 text-left pb-1`)}>{article.title}</p>
                  <p className={tw(`text-gray-500 text-left pb-1 text-sm`)}>{article.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
