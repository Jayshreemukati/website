import React from "react";

export default function Card(props) {   
  return (
    <div class="container">
      <div class="card">
        <img class="card-img" src={props.Image} alt="Vans" />
        <h5 class="prize-tag">
          ₹2,125{" "}
          <span className="btn-cls">
            <button>
              <a href="">Add To Cart</a>
            </button>
          </span>
        </h5>

        <div class="card-body">
          <h4 class="card-title">{props.cardtitle}</h4>

          <div class="select-cls">
            <select class="custom-select ml-1">
              <option selected>Size</option>
              <option value="1">38</option>
              <option value="2">40</option>
              <option value="3">42 </option>
            </select>
          </div>

          <p class="card-text">{props.cardtext}</p>

          <div class="buy d-flex justify-content-between align-items-center"></div>
        </div>
      </div>
    </div>
  );
}
