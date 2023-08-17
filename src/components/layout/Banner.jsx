import Button from "../UI/Button";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__container">
        <h2>Boost your links today</h2>
        <Button rounded={true} fontSize="20px">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Banner;
