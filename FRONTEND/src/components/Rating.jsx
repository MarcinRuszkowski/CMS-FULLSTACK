import React from "react";

function Rating() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <p className="text-lg font-bold text-secondary-color">
          Czy ten tekst był pomocny?
        </p>
        <div className="rating rating-lg rating-half">
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-1 bg-yellow-400"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-2 bg-yellow-400"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-1 bg-yellow-400"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-2 bg-yellow-400"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-1 bg-yellow-400"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-2 bg-yellow-400"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-1 bg-yellow-400"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-2 bg-yellow-400"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-1 bg-yellow-400"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-2 bg-yellow-400"
          />
        </div>
      </div>
      <input
        type="text"
        className="shadow-md border-2 p-3 text-secondary-color rounded-md bg-bg-color"
        placeholder="A jeśli nie był, to wpisz tutaj dlaczgo"
      />
    </div>
  );
}

export default Rating;
