// import LogosSection from "./LogoSection";

import LogosSection from "./LogoSection";

const Footer = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center">
      <footer className="footer p-10 container mx-auto flex justify-around">
        <div className="flex flex-col text-left">
          <h3 className="font-black text-xl">Contacts</h3>
          <p className="flex flex-col text-left text-sm text-zinc-300/70">
            <small>Email: sabbirmurad.doict@gmail.com</small>
            <small>Phone: +880 1893 070812</small>
            <small>Location: Dhaka, Bangladesh</small>
          </p>
        </div>
        <nav>
          <header className="footer-title">Profiles</header>
          <a
            href="https://github.com/devalienbrain"
            target="_blanc"
            className="link link-hover"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/md-sabbir-hassan-murad/"
            target="_blanc"
            className="link link-hover"
          >
            Linkedin
          </a>
          <a
            href="https://drive.google.com/file/d/1NaKFbDg-tRJdA_TmnNz697sOZQuxa0_8/view?usp=sharing"
            target="_blanc"
            className="link link-hover"
          >
            Resume
          </a>
        </nav>
      </footer>
      <div className="my-10">
        <LogosSection></LogosSection>
      </div>
      <div className="text-center text-xs pt-16">
        <p>
          <small>@ 2023 Sabbir || Software Engineer</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
