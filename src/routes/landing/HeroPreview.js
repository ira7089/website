import { Link } from "react-router-dom";

const HeroPreview = () => {
  return (
    <article className="landing__hero">
      <h1 className="hero-font white-text h1-tag">
        Nice to meet you! 
        <br></br> I'm
        <em className="pink-text"> Ira, </em>
        <br></br> Developer and Designer.
      </h1>
      <p className="gray-text p-tag">Front End Development</p>
      <Link className="pink-text" to="/portfolio">
        Check my work
      </Link>
    </article>
  );
};

export default HeroPreview;
