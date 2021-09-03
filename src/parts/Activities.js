import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function Activities({ data }) {
  console.log(data);
  if (data.length === 0) return null;
  return (
    <section className="container">
      <Fade bottom>
        <h4 className="mb-3 font-weight-medium">Activities</h4>
        <div className="container-grid">
          {data.map((item, index2) => {
            return (
              <div
                className="item column-3 row-1"
                key={`activity-item-${index2}`}
              >
                <Fade bottom delay={300 * index2}>
                  <div className="card">
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        className="img-cover"
                        src={
                          item.imageUrl
                            ? `${process.env.REACT_APP_HOST}/${item.imageUrl}`
                            : ""
                        }
                        alt={item.name}
                      />
                    </figure>

                    <div className="meta-wrapper">
                      <Button
                        className="streched-link d-block text-gray-800"
                        href={`/properties/${item._id}`}
                        type="link"
                      >
                        <h5 className="h4">{item.name}</h5>
                        <span className="text-gray-500">{item.type}</span>
                      </Button>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
