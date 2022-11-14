import React from "react";

export const HeaderSection = ({ heading }) => {
  return (
    <section className="about-section-1">
      <div className="container about-header">
        <h3>Home {heading}</h3>
      </div>
    </section>
  );
};
