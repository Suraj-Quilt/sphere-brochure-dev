import { attributes} from '../../../content/pages/home.md'
import { tw, css } from 'twind/css';
import Button from '@/components/button';

/* interface Props {
  content: { attributes: HeroAttributes };
}
interface HeroAttributes {
  hero_title: string;
  hero_description: string;
  hero_image: string;
} */

const headerStyle = css`
  min-height: calc(100vh - 6rem);
  background-image: url('/hero-background.png');
  background-size: cover;
`;

const Header = () => {
  let { hero_title, hero_description } = attributes
  return (
    <>
    <header className={tw(headerStyle)}>
    <div className={tw(`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`)}>
      <div className={tw(`mt-56`)}>
        <h1
          className={tw(`max-w-xs font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-center leading-snug text-gray-800 text-left`)}
        >
          {hero_title}
        </h1>
        <div className={tw(`max-w-xl`)}>
          <p className={tw(`mt-10 text-gray-800 text-center text-xl lg:text-3xl text-left`)}>
          {hero_description}
          </p>
        </div>
        <div className={tw(`mt-10 flex items-center w-full mx-auto`)}>
          <Button>Discover our Culture AI </Button>
          <span className={tw(`mx-2`)}></span>
          <Button primary>Request a Demo</Button>
        </div>
      </div>
    </div>
    <div></div>
  </header>
    </>
  )
}

/* export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'home'}.md`);
  return { props: { content: content.default } };
}; */

export default Header;
