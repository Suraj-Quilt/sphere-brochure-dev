import { tw, css } from 'twind/css';
import Button from '@/components/button';

const headerStyle = css`
  min-height: 100vh;
  background-image: url('/contact_bg.png');
  background-size: cover;
`;

const ContactUs = () => (
  <section className={tw(headerStyle)}>
    <div className={tw(`mx-auto max-w-7xl`)}>
      <div className={tw(`pt-40 pb-20 max-w-md`)}>
        <h1
          className={tw(
            `font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-center leading-snug text-white text-left`,
          )}
        >
          Contact
        </h1>
          <p className={tw(`mt-10 text-white text-center text-xl lg:text-2xl text-left`)}>
            Book a demo with our product specialists today and get a pricing quote.
          </p>
        <div className={tw(`flex flex-col py-4`)}>
          <div className={tw(`mt-10`)}>
          <label className={`block text-white text-sm font-bold`} htmlFor="name" aria-required={true}>
            Name
          </label>
          <input
            aria-label="name"
            type="text"
            className={tw(
              `bg-white bg-opacity-25 min-w-0 w-full rounded text-white my-2 py-2 px-4`,
            )}
            required={true}
          />
          </div>
          <div className={tw(`mt-2`)}>
          <label className={`block text-white text-sm font-bold`} htmlFor="emailaddress" aria-required={true}>
            Email
          </label>
          <input
            aria-label="email address"
            type="text"
            className={tw(
              `bg-white bg-opacity-25 min-w-0 w-full rounded text-white my-2 py-2 px-4`,
            )}
          />
          </div>
          <div className={tw(`mt-2`)}>
          <label className={`block text-white text-sm font-bold`} htmlFor="companyname" aria-required={true}>
            Company Name
          </label>
          <input
            aria-label="Company Name"
            type="text"
            className={tw(
              `bg-white bg-opacity-25 min-w-0 w-full rounded text-white my-2 py-2 px-4`,
            )}
          />
          </div>
          <div className={tw(`mt-2`)}>
          <label className={`block text-white text-sm font-bold`} htmlFor="numberofusers" aria-required={true}>
            Estimated No. of Users
          </label>
          <input
            aria-label="numberofusers"
            type="text"
            className={tw(
              `bg-white bg-opacity-25 min-w-0 w-full rounded text-white my-2 py-2 px-4`,
            )}
          />
          </div>
          
        </div>
        <div className={tw(`w-full flex items-center w-full mx-auto`)}>
          <Button primary>Request a Demo</Button>
        </div>
      </div>
    </div>
    <div></div>
  </section>
);

export default ContactUs;
