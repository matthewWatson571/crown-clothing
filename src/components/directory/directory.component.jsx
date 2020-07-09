import React, { useEffect, useState } from "react";
import "./directory.styles.scss";
import { sectionsData } from "./directory.data";
import { MenuItem } from "../menu-item/menu-item.component";

function Directory() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(sectionsData);
  }, []);

  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem key={section.id} section={section} />
      ))}
    </div>
  );
}

export default Directory;
