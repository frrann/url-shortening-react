import { useState, useRef } from "react";

import Button from "../UI/Button";

import { isValidUrl } from "../../helpers";

// eslint-disable-next-line react/prop-types
const LinkForm = ({ onSetLinks }) => {
  const [isValid, setIsValid] = useState(true);
  const [validationMsg, setValidationMsg] = useState("");
  const linkInputRef = useRef();

  const fetchLink = async (link) => {
    try {
      const response = await fetch(
        `https://api.tinyurl.com/create?api_token=0vSAXYGvwK5BvfDNSNmGq9UzReqUsut9BZbyKE3VBilP38qIVY1n3Xi4g7ys`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: link,
          }),
        }
      );

      if (!response.ok) throw new Error(`Couldn't get the short link.`);

      const { data } = await response.json();

      const newLink = {
        id: data.alias,
        originalLink: data.url,
        shortLink: data.tiny_url,
      };

      onSetLinks((links) => [...links, newLink]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setValidationMsg("");

    const link = linkInputRef.current.value;

    if (!link) {
      setIsValid(false);
      setValidationMsg("Please add a link");
      return;
    }

    if (!isValidUrl(link)) {
      setIsValid(false);
      setValidationMsg("Please add a valid link");
      return;
    }

    fetchLink(link);
    setIsValid(true);
    linkInputRef.current.value = "";
  };

  return (
    <div className="links__form">
      <form onSubmit={handleFormSubmit} className={isValid ? null : "invalid"}>
        <div>
          <input
            id="url"
            type="text"
            placeholder="Shorten a link here..."
            ref={linkInputRef}
          />
          {!isValid && <p>{validationMsg}</p>}
        </div>
        <Button rounded={false}>Shorten it!</Button>
      </form>
    </div>
  );
};

export default LinkForm;
