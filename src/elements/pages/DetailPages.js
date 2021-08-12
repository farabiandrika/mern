import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import Footer from "parts/Footer";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImages from "parts/FeaturedImages";
import PageDetailsDescription from "parts/PageDetailsDescription";
import BookingForm from "parts/BookingForm";
import ItemDetails from "json/itemDetails";
import Categories from "parts/Categories";
import Testimoni from "parts/Testimoni";

export default class DetailPages extends Component {
  componentDidMount() {
    window.title = "Staycation | Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImages data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailsDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5 booking-form">
              <Fade bottom>
                <BookingForm itemDetails={ItemDetails} />
              </Fade>
            </div>
          </div>
        </section>

        <Categories data={ItemDetails.categories} />
        <Testimoni data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}
