import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    if (category.itemId.length === 0) return null;
    return (
      <Fade bottom>
        <section className="container" key={`category-${index1}`}>
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="container-grid">
            {category.itemId.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1}-item-${index2}`}
                >
                  <Fade bottom delay={300 * index2}>
                    <div className="card">
                      {item.isPopular && (
                        <div className="tag">
                          Popular{" "}
                          <span className="font-weight-light">Choice</span>
                        </div>
                      )}
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                          className="img-cover"
                          src={
                            item.imageId[0]
                              ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
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
                          <span className="text-gray-500">
                            {item.city}, {item.country}
                          </span>
                        </Button>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </section>
      </Fade>
    );
  });
}
