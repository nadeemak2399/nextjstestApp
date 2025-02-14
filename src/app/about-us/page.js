import React from 'react'
import Image from "next/image";
function About() {
  return (
    <div className='about-container'>
      <div className='about-hero-banner'>
            <div className="hero-banner-bg-img about-banner">
            <div className="mask hero-mask" >
                <div className="hero-mask-content d-flex">
                <div className="hero-mask-content-inner">
                    <h1 className="mb-3">Welcome To Nexus Patches UK</h1>
                    <p>
                    Since 2010, Nexus Patches has been a trusted leader in the custom patches industry, delivering exceptional craftsmanship and premium quality. With over a decade of expertise, we specialise in creating highly detailed, cost-effective branding solutions for businesses, industries, and individuals while ensuring unmatched customer satisfaction
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className='container about-section mt-5 mb-5'>
          <div className="row">
            <div></div>
            <h2 className='section-head-design'>Our Service</h2>
            <div className="col-4">
              <div className='service-inner'>
                <div className='service-icon'>
                <Image width={150} height={150} src="/assets/Quote-Artwork.webp" alt="Quote & Artwork" />
                </div>
                <div className='service-heading'>
                  <h3>Quote & Artwork</h3>
                </div>
                <div className='service-desc'>
                  <p>
                  Submit a quote with your design, and our sales team will contact you. Receive your digital proof within 1 business day for approval.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className='service-inner'>
                <div className='service-icon'>
                <Image width={150} height={150} src="/assets/Approval-Payment.webp" alt="Approval & Payment" />
                </div>
                <div className='service-heading'>
                  <h3>Approval & Payment</h3>
                </div>
                <div className='service-desc'>
                  <p>
                  Once you approve your digital proof, your order moves into production after payment confirmation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className='service-inner'>
                <div className='service-icon'>
                <Image width={150} height={150} src="/assets/Production-Delivery.webp" alt="Production & Delivery" />
                </div>
                <div className='service-heading'>
                  <h3>Production & Delivery</h3>
                </div>
                <div className='service-desc'>
                  <p>
                  Your patches will be crafted and delivered within 10 to 12 business days, ensuring a fast approval process and free shipping for a hassle-free experience!
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default About
