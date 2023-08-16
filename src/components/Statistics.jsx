import BrandRecognitionIcon from "../assets/images/icon-brand-recognition.svg";
import DetailedRecordsIcon from "../assets/images/icon-detailed-records.svg";
import FullyCustomizableIcon from "../assets/images/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <>
      <div className="intro-text">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="cards">
        <div className="card">
          <div className="statistics-icon">
            <img src={BrandRecognitionIcon} />
          </div>
          <h4>Brand Recognition</h4>
          <div>
            <p>
              Boost your brand recognition with each click. Generic links
              don&apos;t mean a thing. Branded links help instil confidence in
              your content.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="statistics-icon">
            <img src={DetailedRecordsIcon} />
          </div>
          <h4>Detailed Records</h4>
          <div>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="statistics-icon">
            <img src={FullyCustomizableIcon} />
          </div>
          <h4>Fully Customizable</h4>
          <div>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
        <div className="horizontal-line"> </div>
      </div>
    </>
  );
};

export default Statistics;
