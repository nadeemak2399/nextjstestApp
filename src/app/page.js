import Image from "next/image";
import Link from 'next/link'

export default function Home() {


  return (
    <>
      <div className='main-hero-banner'>
            <div className="hero-banner-bg-img">
            <div className="mask hero-mask" >
                <div className="hero-mask-content d-flex">
                <div className="hero-mask-content-inner">
                    <h1 className="mb-3">Custom Patches UK</h1>
                    <p>
                    UK’s Leading Custom Patch Manufacturer. We specialise in high-quality embroidered, woven, PVC, and printed patches for every industry. Enjoy fast turnaround, precision craftsmanship, and free UK delivery on all custom patches.
                    </p>
                    <Link className="btn-herobanner" href="/order-now" role="button">Order Now</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className='patches-benefits'>
            <div className="container">
                <div className='row'>
                    <div className="col-3">
                        <div className='patches-benefits-icon'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
</svg></div>
                        <div className='patches-benefits-desc'>Free Shipping</div>
                    </div>
                    <div className="col-3">
                        <div className='patches-benefits-icon'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-brush" viewBox="0 0 16 16">
  <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z"/>
</svg></div>
                        <div className='patches-benefits-desc'>Free Art</div>
                    </div>
                    <div className="col-3">
                        <div className='patches-benefits-icon'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
</svg></div>
                        <div className='patches-benefits-desc'>No Minimum Qty</div>
                    </div>
                    <div className="col-3">
                        <div className='patches-benefits-icon'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
</svg></div>
                        <div className='patches-benefits-desc'>Cheap Prices</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-5">
            <div className='patch-item-container' >
        <h2 className='section-head-design'>Popular Patches Types We Provide For You</h2>
        <div className='patch-item-head-desc'>Shop our best-selling custom patches loved by our customers.</div>
            <div className="row ">
                <div className="col-6">
                    <div className="patch-item">
                        <div className="patch-item-img"><Image width={150} height={50} src="/assets/Embroidered-Patch.webp" alt="testlogo" /></div>
                        <div className='patch-item-content-container'>
                            <div className="patch-item-content">
                                <h3>Embroidered Patches</h3>
                                <div className="patch-item-price">
                                    100 Patches from <span>$1.80/patch</span>
                                </div>
                                <div className="patch-item-order">
                                    <Link className="nav-link" href="/custom/embroidered-patches">Order Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="patch-item">
                        <div className="patch-item-img"><Image width={150} height={50} src="/assets/PVC-patch.webp" alt="testlogo" /></div>
                        <div className='patch-item-content-container'>
                            <div className="patch-item-content">
                                <h3>PVC Patches</h3>
                                <div className="patch-item-price">
                                    100 Patches from <span>$1.70/patch</span>
                                </div>
                                <div className="patch-item-order">
                                <Link className="nav-link" href="/custom/pvc-patches">Order Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row ">
                <div className="col-6">
                    <div className="patch-item">
                        <div className="patch-item-img"><Image width={150} height={50} src="/assets/woven-patch.webp" alt="testlogo" /></div>
                        <div className='patch-item-content-container'>
                            <div className="patch-item-content">
                                <h3>Woven Patches</h3>
                                <div className="patch-item-price">
                                    100 Patches from <span>$1.60/patch</span>
                                </div>
                                <div className="patch-item-order">
                                <Link className="nav-link" href="/custom/woven-patches">Order Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="patch-item">
                        <div className="patch-item-img"><Image width={150} height={50} src="/assets/printed-patch.webp" alt="testlogo" /></div>
                        <div className='patch-item-content-container'>
                            <div className="patch-item-content">
                                <h3>Printed Patches</h3>
                                <div className="patch-item-price">
                                    100 Patches from <span>$1.50/patch</span>
                                </div>
                                <div className="patch-item-order">
                                <Link className="nav-link" href="/custom/printed-patches">Order Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
        </div>
        <div className="patch-content-section">
            <div className="container">
                <h2 className='section-head-design'>UK's Best Custom Patch Maker </h2>
                <div className="row">
                    <div className="col-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <h3>Custom Patches in UK for Every Industry</h3>
                        <p>Welcome to NexusPatches.Co.uk, UK’s best custom patch maker, offering top-quality custom patches UK for businesses, organisations, and events. Whether you need Velcro hook & loop or iron-on patches, sew-on patches, or plastic backing patches, we provide them all with precision and durability.</p>

                        <p>Our expert team offers a free design service, ensuring ordering custom patches is completely stress-free. We handle everything from enquiry to delivery, creating bespoke custom patches tailored to your needs. Enjoy free artwork, free shipping, and no minimum order – benefits other UK patch makers can’t match!</p>

                        <p>Our custom patch designers craft unique, high-quality patches for any industry. Whether you require embroidered, PVC, or woven patches, we guarantee top-quality patches at competitive prices.</p>

                        <p>Let us handle everything, making bespoke patches for businesses, organisations, and events. Order your custom patches in the UK instantly and bring your vision to life today!</p>
                    </div>
                    <div className="col-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="image-container-home">
                            <Image width={150} height={50} src="/assets/Custom-Patches-in-UK.webp" alt="Custom Patches UK" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="patch-type-container">
            <div className="container">
            <h2 className='section-head-design'>More Patches Category Options</h2>
                <div className="row">
                    <div className="col-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="patch-type-inner">
                            <div className="patch-type-img"><Link href="/custom-woven-labels/"><Image width={150} height={50} src="/assets/custom-woven-labels.webp" alt="custom woven labels" /></Link></div>
                            <div className="patch-type-content">
                                <Link href="/custom-woven-labels/"><h3>Woven Labels</h3></Link>
                                <div className="patch-type-price">
                                100 Patches from <span>$1.20/patch</span>
                                </div>
                                <div className='patch-type-intro'>
                                    Distinctive with a recognizable style.
                                </div>
                                <div className="patch-type-order">
                                    <Link href="/custom-woven-labels/">Order Now</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="patch-type-inner">
                            <div className="patch-type-img"><Link href="/custom-police-patches/"><Image width={150} height={50} src="/assets/custom-police-patch.webp" alt="testlogo" /></Link></div>
                            <div className="patch-type-content">
                                <Link href="/custom-police-patches/"><h3>Police Patches</h3></Link>
                                <div className="patch-type-price">
                                100 Patches from <span>$1.90/patch</span>
                                </div>
                                <div className='patch-type-intro'>
                                    Distinctive with a recognizable style.
                                </div>
                                <div className="patch-type-order">
                                    <Link href="/custom-police-patches/">Order Now</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="patch-type-inner">
                            <div className="patch-type-img"><Link href="/custom-military-patches/"><Image width={150} height={50} src="/assets/Military-Patches.webp" alt="testlogo" /></Link></div>
                            <div className="patch-type-content">
                                <Link href="/custom-military-patches/"><h3>Military Patches</h3></Link>
                                <div className="patch-type-price">
                                100 Patches from <span>$1.75/patch</span>
                                </div>
                                <div className='patch-type-intro'>
                                    Distinctive with a recognizable style.
                                </div>
                                <div className="patch-type-order">
                                    <Link href="/custom-military-patches/">Order Now</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="patch-type-inner">
                            <div className="patch-type-img"><Link href="/custom-velcro-patches/"><Image width={150} height={50} src="/assets/velcro-patch.webp" alt="testlogo" /></Link></div>
                            <div className="patch-type-content">
                                <Link href="/custom-velcro-patches/"><h3>Velcro Patches</h3></Link>
                                <div className="patch-type-price">
                                100 Patches from <span>$1.80/patch</span>
                                </div>
                                <div className='patch-type-intro'>
                                    Distinctive with a recognizable style.
                                </div>
                                <div className="patch-type-order">
                                    <Link href="/custom-velcro-patches/">Order Now</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='row'>
                    <div className="col-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="patch-type-inner">
                            <div className="patch-type-img"><Link href="/custom-motorcycle-patches/"><Image width={150} height={50} src="/assets/Custom-Motorcycle-Patches.webp" alt="testlogo" /></Link></div>
                            <div className="patch-type-content">
                                <Link href="/custom-motorcycle-patches/"><h3>Motorcycle Patches</h3></Link>
                                <div className="patch-type-price">
                                100 Patches from <span>$1.70/patch</span>
                                </div>
                                <div className='patch-type-intro'>
                                    Distinctive with a recognizable style.
                                </div>
                                <div className="patch-type-order">
                                    <Link href="/custom-motorcycle-patches/">Order Now</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="patch-type-inner">
                            <div className="patch-type-img"><Link href="/custom-sports-patches/"><Image width={150} height={50} src="/assets/sports-patch.webp" alt="testlogo" /></Link></div>
                            <div className="patch-type-content">
                                <Link href="/custom-sports-patches/"><h3>Sports Patches</h3></Link>
                                <div className="patch-type-price">
                                100 Patches from <span>$1.60/patch</span>
                                </div>
                                <div className='patch-type-intro'>
                                    Distinctive with a recognizable style.
                                </div>
                                <div className="patch-type-order">
                                    <Link href="/custom-sports-patches/">Order Now</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="patch-type-inner">
                            <div className="patch-type-img"><Link href="/custom-name-patches/"><Image width={150} height={50} src="/assets/name-patch.webp" alt="testlogo" /></Link></div>
                            <div className="patch-type-content">
                                <Link href="/custom-name-patches/"><h3>Name Patches</h3></Link>
                                <div className="patch-type-price">
                                    100 Patches from <span>$1.40/patch</span>
                                </div>
                                <div className='patch-type-intro'>
                                    Distinctive with a recognizable style.
                                </div>
                                <div className="patch-type-order">
                                    <Link href="/custom-name-patches/">Order Now</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    


            </div>        
        </div>
        <div className='custom-hero-banner'>
            <div className="hero-banner-bg-img custom-banner">
            <div className="mask hero-mask" >
                <div className="hero-mask-content d-flex">
                <div className="hero-mask-content-inner">
                    <h1 className="mb-3">CUSTOM PATCHES</h1>
                    <p>
                    At Nexus Patches, we provide top-quality custom patches with a low minimum order requirement, making them accessible to everyone. Our patches come in any size, shape, or colour, with up to 8 thread colours for intricate embroidery. Choose from iron-on, sew-on, Velcro hook & loop, or peel & stick backings for easy application. We offer free design artwork and unlimited edits to ensure perfection. With a fast turnaround time and free delivery within 10-12 business days, you receive your patches promptly. Plus, enjoy big discounts on bulk orders. Order today for premium patches at unbeatable prices!
                    </p>
                    <Link className="btn-herobanner" href="/order-now" role="button">Order Now</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className='why-container'>
            <div className="container">
                <h2 className='section-head-design'>Why Choose Nexus Patches</h2>
                <div className="row">
                    <div className="col-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="why-container-inner">
                            <div className="why-inner-icon">
                            <Image width={150} height={150} src="/assets/Quote-Artwork.webp" alt="Quote & Artwork" />
                            </div>
                            <div className="why-container-content">
                                <h3>Quote & Artwork</h3>
                                <div className="why-container-desc">
                                    <p>
                                    Submit a quote with your design, and our sales team will contact you. Receive your digital proof within 1 business day for approval.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="why-container-inner">
                            <div className="why-inner-icon">
                            <Image width={150} height={150} src="/assets/Approval-Payment.webp" alt="Approval & Payment" />
                            </div>
                            <div className="why-container-content">
                                <h3>Approval & Payment</h3>
                                <div className="why-container-desc">
                                    <p>
                                    Once you approve your digital proof, your order moves into production after payment confirmation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="why-container-inner">
                            <div className="why-inner-icon">
                            <Image width={150} height={150} src="/assets/Production-Delivery.webp" alt="Production & Delivery" />
                            </div>
                            <div className="why-container-content">
                                <h3>Production & Delivery</h3>
                                <div className="why-container-desc">
                                    <p>
                                    Your patches will be crafted and delivered within 10 to 12 business days, ensuring a fast approval process and free shipping for a hassle-free experience!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='faq-container'>
            <div className="container">
                <h2 className='section-head-design'>Frequently Asked Questions</h2>
                <div className="row">
                    <div className="col-6  col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="accordion" id="accordionFirstCol">
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneFirstCol" aria-expanded="true" aria-controls="collapseOneFirstCol">
                            <span>Q: </span> Can I customise the size, shape, and colours of my patch?
                            </button>
                            </h3>
                            <div id="collapseOneFirstCol" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionFirstCol">
                            <div className="accordion-body">
                            Yes! We create fully customised patches in any size, shape, or colour, with up to 8 thread colours for embroidery.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoFirstCol" aria-expanded="false" aria-controls="collapseTwoFirstCol">
                            <span>Q: </span> Do you offer free design services and edits?
                            </button>
                            </h3>
                            <div id="collapseTwoFirstCol" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFirstCol">
                            <div className="accordion-body">
                            Yes, we provide free design artwork and unlimited edits, ensuring your patch looks exactly how you want it before production begins.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeFirstCol" aria-expanded="false" aria-controls="collapseThreeFirstCol">
                            <span>Q:</span> Are your patches suitable for outdoor use and washing?
                            </button>
                            </h3>
                            <div id="collapseThreeFirstCol" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFirstCol">
                            <div className="accordion-body">
                            Absolutely! Our patches are made from high-quality materials, ensuring they are durable, fade-resistant, and washable.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefourFirstCol" aria-expanded="false" aria-controls="collapsefourFirstCol">
                            <span>Q:</span> How can I place an order and make a payment?
                            </button>
                            </h3>
                            <div id="collapsefourFirstCol" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFirstCol">
                            <div className="accordion-body">
                            First, submit your order on our website. Our sales team will contact you to finalise the details. Once everything is confirmed, we will send you a Stripe invoice, which you can pay using a credit or debit card. After payment is received, your order will proceed to production.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefiveFirstCol" aria-expanded="false" aria-controls="collapsefiveFirstCol">
                            <span>Q:</span> Do you provide bulk order discounts?
                            </button>
                            </h3>
                            <div id="collapsefiveFirstCol" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFirstCol">
                            <div className="accordion-body">
                            Yes, we offer big discounts on large orders, making bulk purchases more cost-effective for businesses, clubs, and organisations.
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-6  col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="accordion" id="accordionSecondCol">
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneSecondCol" aria-expanded="true" aria-controls="collapseOneSecondCol">
                            <span>Q: </span> What types of custom patches do you offer?
                            </button>
                            </h3>
                            <div id="collapseOneSecondCol" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionSecondCol">
                            <div className="accordion-body">
                                    We provide embroidered, woven, PVC, leather, chenille, and printed patches.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoSecondCol" aria-expanded="false" aria-controls="collapseTwoSecondCol">
                            <span>Q: </span> What is the minimum order quantity for custom patches?
                            </button>
                            </h3>
                            <div id="collapseTwoSecondCol" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionSecondCol">
                            <div className="accordion-body">
                            We have a low minimum order requirement, making it easy for individuals and businesses to order, whether you need one patch or a bulk quantity.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeSecondCol" aria-expanded="false" aria-controls="collapseThreeSecondCol">
                            <span>Q:</span> How long does it take to receive my order?
                            </button>
                            </h3>
                            <div id="collapseThreeSecondCol" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionSecondCol">
                            <div className="accordion-body">
                            Our standard turnaround time is 10-12 business days, including free delivery. Urgent orders may be accommodated upon request.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefourSecondCol" aria-expanded="false" aria-controls="collapsefourSecondCol">
                            <span>Q:</span> What backing options are available for patches?
                            </button>
                            </h3>
                            <div id="collapsefourSecondCol" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionSecondCol">
                            <div className="accordion-body">
                            We offer iron-on, sew-on, Velcro hook & loop, plastic, and peel & stick backings, allowing you to choose the best option for your application.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </>
  );
}
