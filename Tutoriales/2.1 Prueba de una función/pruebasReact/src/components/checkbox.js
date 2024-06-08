import React, { useState } from "react";

function Checkbox(props) {
  const [status, setStatus] = useState({ isChecked: false });

  const onChange = () => {
    setStatus({ isChecked: !status.isChecked });
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={status.isChecked} onChange={onChange} />
        {status.isChecked ? props.labelActive : props.labelInactive}
      </label>
    </div>
  );
}

export default Checkbox;