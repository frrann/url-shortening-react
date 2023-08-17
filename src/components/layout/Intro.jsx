import Button from "../UI/Button";

import WorkingImg from "../../assets/images/illustration-working.svg";

const Intro = () => {
  return (
    <section className="intro">
      <div className="introduction">
        <div className="introduction__text">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <Button rounded={true} fontSize="20px">
            Get Started
          </Button>
        </div>
      </div>
      <div className="cover">
        <img className="cover-img" src={WorkingImg} alt="working person" />
      </div>
    </section>
  );
};

export default Intro;
