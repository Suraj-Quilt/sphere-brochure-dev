import { tw, css } from 'twind/css';
import Button from '@/components/button';

const headerStyle = css`
  min-height: calc(100vh - 6rem);
  background-image: url('/hero-background.png');
  background-size: cover;
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`)}>
      <div className={tw(`mt-56`)}>
        <h1
          className={tw(`max-w-xs font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-center leading-snug text-gray-800 text-left`)}
        >
          Welcome to Sphere
        </h1>
        <div className={tw(`max-w-xl`)}>
          <p className={tw(`mt-10 text-gray-800 text-center text-xl lg:text-3xl text-left`)}>
          Your one-stop internet-enabled toolkit to power strategic decisions.
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
);

export default Header;
