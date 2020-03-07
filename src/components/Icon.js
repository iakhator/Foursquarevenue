import React from "react";

export default function Icon({ locationIcon }) {
  return (
    <div>
      <img
        src={locationIcon ? `${locationIcon.icon.prefix}32${locationIcon.icon.suffix}` : ''}
        alt={locationIcon ? locationIcon.id : ''}
      />
    </div>
  );
}
