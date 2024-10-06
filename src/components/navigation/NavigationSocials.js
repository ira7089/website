import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
const NavigationSocials = () => {
  return (
    <section className="navigation__socials">
      <a
        href="https://www.linkedin.com/in/catherinemitagvaria/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="LinkedIn profile" />
      </a>
      <a
        href="https://github.com/catherineisonline"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="GitHub" />
      </a>
    </section>
  );
};

export default NavigationSocials;
