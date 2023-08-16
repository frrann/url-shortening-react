import { useState } from "react";
import Button from "./Button";

const isValidUrl = (urlString) => {
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
};

// eslint-disable-next-line react/prop-types
const LinkForm = ({ onSetLinks }) => {
  const [isValid, setIsValid] = useState(true);
  const [validationMsg, setValidationMsg] = useState("");

  const fetchURL = async (url) => {
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );

      if (!response.ok) throw new Error(`Couldn't get the short link.`);

      const data = await response.json();

      const newUrl = {
        id: data.result.code,
        originalUrl: data.result.original_link,
        shortUrl: data.result.full_short_link,
      };

      onSetLinks((urls) => [...urls, newUrl]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setValidationMsg("");

    const url = event.target.url.value;

    if (!url) {
      setIsValid(false);
      setValidationMsg("Please add a link");
      return;
    }

    if (!isValidUrl(url)) {
      setIsValid(false);
      setValidationMsg("Please add a valid link");
      return;
    }

    fetchURL(url);
    setIsValid(true);
  };

  return (
    <div className="url-shortening">
      <form onSubmit={handleFormSubmit} className={isValid ? null : "invalid"}>
        <div>
          <input id="url" type="text" placeholder="Shorten a link here..." />
          {!isValid && <p>{validationMsg}</p>}
        </div>
        <Button rounded={false}>Shorten it!</Button>
      </form>
    </div>
  );
};

export default LinkForm;
