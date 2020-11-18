import React from 'react'

export default function Rating(props) {
    // const { rating, numReviews } = useState(props);
    // console.log(props.rating);
    // console.log(numReviews);
    return (
      <div className="rating">
        <span>
          <i
            className={
              props.rating >= 1
                ? 'fa fa-star'
                : props.rating >= 0.5
                ? 'fa fa-star-half-o'
                : 'fa fa-star-o'
            }
          ></i>
        </span>
        <span>
          <i
            className={
              props.rating >= 2
                ? 'fa fa-star'
                : props.rating >= 1.5
                ? 'fa fa-star-half-o'
                : 'fa fa-star-o'
            }
          ></i>
        </span>
        <span>
          <i
            className={
              props.rating >= 3
                ? 'fa fa-star'
                : props.rating >= 2.5
                ? 'fa fa-star-half-o'
                : 'fa fa-star-o'
            }
          ></i>
        </span>
        <span>
          <i
            className={
              props.rating >= 4
                ? 'fa fa-star'
                : props.rating >= 3.5
                ? 'fa fa-star-half-o'
                : 'fa fa-star-o'
            }
          ></i>
        </span>
        <span>
          <i
            className={
              props.rating >= 5
                ? 'fa fa-star'
                : props.rating >= 4.5
                ? 'fa fa-star-half-o'
                : 'fa fa-star-o'
            }
          ></i>
        </span>
        <span>{props.numReviews + ` reviews`}</span>
      </div>
    );
  }