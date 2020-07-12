import React from 'react'

import { Alert, Badge } from 'react-bootstrap'

const Header = ({ PersonsLength, appTitle }) => {
  let badgeStyle = "";

  if (PersonsLength >= 3) badgeStyle = "success";
  if (PersonsLength <= 2) badgeStyle = "warning";
  if (PersonsLength <= 1) badgeStyle = "danger";
  return (
    <div>
      <Alert variant="info">
        <h2>{appTitle}</h2>
      </Alert>
      <Alert variant="light">
        تعداد اشخاص{" "}
        <Badge pill variant={badgeStyle}>
          {PersonsLength}
        </Badge>{" "}
                    نفر می باشد
      </Alert>
    </div>
  );
}

export default Header;