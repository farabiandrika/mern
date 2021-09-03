import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import Footer from "parts/Footer";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImages from "parts/FeaturedImages";
import PageDetailsDescription from "parts/PageDetailsDescription";
import BookingForm from "parts/BookingForm";

import Testimoni from "parts/Testimoni";
import Activities from "parts/Activities";

import { connect } from "react-redux";
import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";

class DetailPages extends Component {
  componentDidMount() {
    window.title = "Staycation | Details Page";
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id]) {
      this.props.fetchPage(
        `/detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
    }
  }
  render() {
    const { page, match } = this.props;
    console.log(page[match.params.id]);
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    if (!page[match.params.id]) return null;
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={page[match.params.id]}
        ></PageDetailTitle>
        <FeaturedImages data={page[match.params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailsDescription data={page[match.params.id]} />
              </Fade>
            </div>
            <div className="col-5 booking-form">
              <Fade bottom>
                <BookingForm
                  itemDetails={page[match.params.id]}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>

        <Activities data={page[match.params.id].activityId} />
        <Testimoni data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailPages
);
