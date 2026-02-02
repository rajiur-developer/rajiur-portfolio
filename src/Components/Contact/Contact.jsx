"use client";
import React, { useState } from "react";
import { IoPerson, IoMail, IoPencil, IoSend } from "react-icons/io5";
import { Zoom } from "react-reveal";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_e6snkoa", // Your Service ID
        "template_axzowg3", // Your Template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "oSJAa1THsxHKO4F85" // Your Public Key
      )
      .then(
        (result) => {
          setIsLoading(false);
          toast.success("Thank you! Your message has been sent.", {
            position: "top-right",
            autoClose: 5000,
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setIsLoading(false);
          toast.error("Oops! Something went wrong. Please try again.", {
            position: "top-right",
            autoClose: 5000,
          });
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <section className="py-5" id="contact">
      <Zoom>
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary">Get In Touch</h2>
            <p className="lead text-light">
              Have a project in mind or just want to say hi? Feel free to reach
              out.
            </p>
            <div className="d-flex justify-content-center">
              <div
                style={{ width: "60px", height: "3px", backgroundColor: "#cfd615ff" }}
              ></div>
            </div>
          </div>

          {/* Form Card */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card form-card border-1 p-4 p-md-5">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      {/* Name */}
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label fw-medium">
                          Your Name
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <IoPerson className="text-primary" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label fw-medium">
                          Your Email
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <IoMail className="text-primary" />
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="john.doe@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="col-12">
                        <label htmlFor="subject" className="form-label fw-medium">
                          Subject
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <IoPencil className="text-primary" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            name="subject"
                            placeholder="Project Inquiry"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="col-12">
                        <label htmlFor="message" className="form-label fw-medium">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="6"
                          placeholder="Hi, I'd like to discuss..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg px-5 shadow"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message <IoSend className="ms-2" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
      <ToastContainer />
    </section>
  );
};

export default Contact;
