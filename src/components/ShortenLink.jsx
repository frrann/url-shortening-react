import { useState } from "react";

import Button from "./Button";

/* eslint-disable react/prop-types */
const ShortenLink = ({ link: url }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleBtnClick = () => {
    navigator.clipboard.writeText(url.shortUrl);
    setIsCopied(true);
  };

  return (
    <li className="link">
      <div className="urls">
        <p>{url.originalUrl}</p>
        <p style={{ color: "hsl(180, 66%, 49%)" }}>{url.shortUrl}</p>
      </div>
      <Button
        disabled={isCopied}
        onClick={handleBtnClick}
        rounded={false}
        fontSize="14px"
      >
        {isCopied ? "Copied!" : "Copy"}
      </Button>
    </li>
  );
};

export default ShortenLink;
