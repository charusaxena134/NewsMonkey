import React from "react";

// export class NewsItem extends Component
const NewsItem = (props) => {
  // render() {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span class="badge rounded-pill bg-danger">{source}</span>
        </div>

        <img
          src={
            !imageUrl
              ? "https://www.xda-developers.com/files/2022/10/iPhone-14-vs-Galaxy-S22.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p class="card-text">
            <small class="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} className="btn btn-sm btn-primary btn-dark">
            read more
          </a>
        </div>
      </div>
    </div>
  );
  // }
};

export default NewsItem;
