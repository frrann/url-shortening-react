import Card from "../UI/Card";

import BrandRecognitionIcon from "../../assets/images/icon-brand-recognition.svg";
import DetailedRecordsIcon from "../../assets/images/icon-detailed-records.svg";
import FullyCustomizableIcon from "../../assets/images/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <>
      <div className="statistics__text">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="cards">
        <Card
          icon={BrandRecognitionIcon}
          title="Brand Recognition"
          content="Boost your brand recognition with each click. Generic links
              don't mean a thing. Branded links help instil confidence in
              your content."
        />
        <Card
          icon={DetailedRecordsIcon}
          title="Detailed Records"
          content="Gain insights into who is clicking your links. Knowing when and
          where people engage with your content helps inform better
          decisions."
        />
        <Card
          icon={FullyCustomizableIcon}
          title="Fully Customizable"
          content="Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement."
        />

        <div className="horizontal-line"> </div>
      </div>
    </>
  );
};

export default Statistics;
