import Button from "./Button";

const GetStarted = () => {
  return (
    <section className="get-started">
      <div className="get-started-container">
        <h2>Boost your links today</h2>
        <Button rounded={true} fontSize="20px">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default GetStarted;
