import { useEffect, useState } from "react";

import LinkForm from "./LinkForm";
import ShortenLink from "./ShortenLink";
import Statistics from "../layout/Statistics";

const initialLinks = () => {
  let storedLinks = localStorage.getItem("links");
  if (storedLinks !== null) {
    return JSON.parse(storedLinks);
  }
  return [];
};

const Links = () => {
  const [links, setLinks] = useState(initialLinks);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <section className="links">
      <LinkForm onSetLinks={setLinks} />
      <div className="statistics">
        {links.length !== 0 && (
          <div className="shorten__links">
            <ul>
              {links.map((link) => (
                <ShortenLink link={link} key={link.id} />
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
