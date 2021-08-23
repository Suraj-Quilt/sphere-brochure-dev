import { tw } from 'twind';
import Button from '@/components/button';

const sectionLinks = [`About`, `Use Cases`, `Testimonials`, `Request a Demo`];
const serviceLinks = [`Privacy Policy`, `Terms of Service`];

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-400`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 py-24 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`w-full lg:w-1/3 mt-6 lg:mt-0`)}>
        <img className={tw(`h-12 w-48 mr-4`)} src="quilt_logo_black.png" alt="logo" />
      </div>
      <div className={tw(`w-full lg:w-1/3 mt-6 lg:mt-0`)}></div>
      <div className={tw(`w-full lg:w-1/3 items-center`)}>
        <ul className={tw(`flex flex-wrap px-4`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <ul>
                {sectionLinks.map((link) => (
                  <li className={tw(`text-purple-700 text-md font-medium leading-6`)} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/3 md:w-1/3 lg:w-1/3`)}>
            <div>
              <ul>
                {serviceLinks.map((link) => (
                  <li className={tw(`text-purple-700 text-md font-medium leading-6`)} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className={tw(`bg-purple-700 text-center p-4`)}>
      <p className={tw(`text-white`)}>© 2021 Quilt.AI - All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
