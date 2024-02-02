import { useState } from "react";

import Button from "../UI/Button";

/* eslint-disable react/prop-types */
const ShortenLink = ({ link }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleBtnClick = () => {
    navigator.clipboard.writeText(link.shortLink);
    setIsCopied(true);
  };

  return (
    <li>
      <div className="shorten__link">
        <p style={{ overflowWrap: "anywhere" }}>{link.originalLink}</p>
        <p>{link.shortLink}</p>
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
