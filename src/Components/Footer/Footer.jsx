// import LogosSection from "./LogoSection";

import LogosSection from "./LogoSection";

const Footer = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center">
      <footer className="footer p-10 container mx-auto flex justify-around">
        <div className="flex flex-col text-left">
          <h3 className="font-black text-xl">Contacts</h3>
          <p className="flex flex-col text-left text-sm text-zinc-300/70">
            <small>Email: sync360.todo@gmail.com</small>
            <small>Phone: +22009308081</small>
            <small>Location: Dhaka, Bangladesh</small>
          </p>
        </div>
        <nav>
          <header className="footer-title">Pages</header>
          <a
            href="https://www.youtube.com/"
            target="_blanc"
            className="link link-hover"
          >
            Youtube
          </a>
          <a
            href="https://twitter.com/?lang=en"
            target="_blanc"
            className="link link-hover"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blanc"
            className="link link-hover"
          >
            Facebook
          </a>
        </nav>
      </footer>
      <div className="my-10">
        <LogosSection></LogosSection>
      </div>
      <div className="text-center text-xs pt-16">
        <p>
          <small>2023 All Rights Preserved by || devAlienBrain @ Sync360</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
