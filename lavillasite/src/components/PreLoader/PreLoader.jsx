import React from "react";
import classNames from "classnames";

export default function PreLoader({ data }) {
  const akpreloader = classNames("ak-preloader ", {
    loaded: data !== true,
  });

  return (
    <div id="preloader">
      <div id="ak-preloader" className={akpreloader}>
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="E" className="letters-loading">
              L
            </span>

            <span data-text-preloader="L" className="letters-loading">
              A
            </span>

            <span data-text-preloader="E" className="letters-loading">
              V
            </span>

            <span data-text-preloader="G" className="letters-loading">
              I
            </span>

            <span data-text-preloader="E" className="letters-loading">
              L
            </span>

            <span data-text-preloader="N" className="letters-loading">
              L
            </span>

            <span data-text-preloader="C" className="letters-loading">
              A
            </span>
            <span data-text-preloader="I" className="letters-loading">
              
            </span>
            <span data-text-preloader="A" className="letters-loading">
              
            </span>
          </div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </div>
  );
}
