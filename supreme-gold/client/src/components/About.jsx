import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Code in object-oriented programming is organized around objects.
              Once you have your objects, they can interact with each other to
              make something happen. Let's say you want to have a program where
              a person gets into a car and drives it from A to B. You would
              start by describing the objects, such as a person and car. That
              includes methods: a person knows how to drive a car, and a car
              knows what it is like to be driven. Once you have your objects,
              you bring them together so the person can get into the car and
              drive.
            </p>
            <Link to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/images/about.png"
              alt="About Us"
              height="500px"
              width="650"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
