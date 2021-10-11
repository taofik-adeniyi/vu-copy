import React, { useState } from 'react'
import Switch from "react-switch"

export const Toggle = () => {
    const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };
    return (
        <div className="example">
      <label>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
        />
      </label>
      {/* <p>
        The switch is <span>{checked ? "on" : "off"}</span>.
      </p> */}
    </div>
    )
}


/* styles.css */

// .react-switch {
//     vertical-align: middle;
//     margin-left: 4px;
//   }
     

export default Toggle
