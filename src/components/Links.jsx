import { useEffect, useState } from "react";

import LinkForm from "./LinkForm";
import ShortenLink from "./ShortenLink";
import Statistics from "./Statistics";

const Links = () => {
  const [links, setLinks] = useState(() => {
    let value = localStorage.getItem("links");
    if (value !== null) {
      return JSON.parse(value);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <section className="links">
      <LinkForm onSetLinks={setLinks} />
      <div className="statistics">
        {links.length !== 0 && (
          <div className="shorten-link">
            <ul>
              {links.map((url) => (
                <ShortenLink link={url} key={url.id} />
              ))}
            </ul>
          </div>
        )}
        <Statistics />
      </div>
    </section>
  );
};

export default Links;
