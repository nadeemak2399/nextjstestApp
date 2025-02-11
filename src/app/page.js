import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'
import Head from 'next/head';


export default function Home() {


  return (
    <>
    <Head>
      <title>Custom Embroidered Patches</title>
    </Head>
      <div className='main-hero-banner'>
            <div className="hero-banner-bg-img">
            <div className="mask hero-mask" >
                <div className="hero-mask-content d-flex">
                <div className="hero-mask-content-inner">
                    <h1 className="mb-3">CUSTOM PATCHES</h1>
                    <p>Our military patches are of the highest quality and you are guaranteed to be 100% satisfied.</p>
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
                                    As low as : <span>$0.14 ea.</span>
                                </div>
                                <div className="patch-item-order">
                                    <Link className="nav-link" href="custom/embroidered-patches">Order Now</Link>
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
                                    As low as : <span>$0.14 ea.</span>
                                </div>
                                <div className="patch-item-order">
                                <Link className="nav-link" href="custom/pvc-patches">Order Now</Link>
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
                                    As low as : <span>$0.14 ea.</span>
                                </div>
                                <div className="patch-item-order">
                                <Link className="nav-link" href="custom/woven-patches">Order Now</Link>
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
                                    As low as : <span>$0.14 ea.</span>
                                </div>
                                <div className="patch-item-order">
                                <Link className="nav-link" href="custom/printed-patches">Order Now</Link>
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
                <h2 className='section-head-design'>Custom Patches in UK for Every Industry </h2>
                <div className="row">
                    <div className="col-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <h3>London’s Best Patches Design Company Weaving Each Patch with Years of Experience</h3>
                        <p>
                            Custom embroidered patches are the go-to option for every existing industry, including the military, motorcycle clubs, organizations, anniversaries and other occasions. Bespoke Patches UK is a one-stop kind of clothing patch making company that offers best quality embroidery patches for clothing, backed with your desired type of backing, with free artwork and unlimited cycles of design edits.
                        </p>
                        <p>
                            Expert patch creators here can turn any design into thread artwork. All you have to do is, follow a few steps, and we’d deliver your personalised patches to your doorstep in no time! Being a part of this market for 10+ years, we have mastered the art of needle and thread. Here at our custom-made badge making company, each fabric badge is stitched with experience, and perfection.
                        </p>
                        <p>
                        Whether you need to personalise your outfit, wish to raise brand awareness, or want to bring old apparel to life, our customised embroidered patches can be your rescue. With a wide range of backing options available, you do not have to limit your imagination! Be it heat-and-seal, Velcro, sew-on, clutch pin, magnetic, or anything else – it’s all available at Bespoke Patches UK.
                        </p>
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
                            <div className="patch-type-img"><Link href="custom-woven-labels/"><Image width={150} height={50} src="/assets/FullEmbroideredPrintedmob.png" alt="testlogo" /></Link></div>
                            <div className="patch-type-content">
                                <Link href="custom-woven-labels/"><h3>Woven Labels</h3></Link>
                                <div className="patch-type-price">
                                    As low as : <span>$0.14 ea.</span>
                                </div>
                                <div className='patch-type-intro'>
                                    Distinctive with a recognizable style.
                                </div>
                                <div className="patch-type-order">
                                    <Link href="custom-woven-labels/">Order Now</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="patch-type-inner">
                            <div className="patch-type-img"><Link href="custom-police-patches/"><Image width={150} height={50} src="/assets/custom-police-patch.webp" alt="testlogo" /></Link></div>
                            <div className="patch-type-content">
                                <Link href="custom-police-patches/"><h3>Police Patches</h3></Link>
                                <div className="patch-type-price">
                                    As low as : <span>$0.14 ea.</span>
                                </div>
                                <div className='patch-type-intro'>
                                    Distinctive with a recognizable style.
                                </div>
                                <div className="patch-type-order">
                                    <Link href="custom-police-patches/">Order Now</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="patch-type-inner">
                            <div className="patch-type-img"><Link href="custom-military-patches/"><Image width={150} height={50} src="/assets/Military-Patches.webp" alt="testlogo" /></Link></div>
                            <div className="patch-type-content">
                                <Link href="custom-military-patches/"><h3>Military Patches</h3></Link>
                                <div className="patch-type-price">
                                    As low as : <span>$0.14 ea.</span>
                                </div>
                                <div className='patch-type-intro'>
                                    Distinctive with a recognizable style.
                                </div>
                                <div className="patch-type-order">
                                    <Link href="custom-military-patches/">Order Now</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="patch-type-inner">
                            <div className="patch-type-img"><Link href="custom-velcro-patches/"><Image width={150} height={50} src="/assets/velcro-patch.webp" alt="testlogo" /></Link></div>
                            <div className="patch-type-content">
                                <Link href="custom-velcro-patches/"><h3>Velcro Patches</h3></Link>
                                <div className="patch-type-price">
                                    As low as : <span>$0.14 ea.</span>
                                </div>
                                <div className='patch-type-intro'>
                                    Distinctive with a recognizable style.
                                </div>
                                <div className="patch-type-order">
                                    <Link href="custom-velcro-patches/">Order Now</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='row'>
                    <div className="col-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="patch-type-inner">
                            <div className="patch-type-img"><Link href="custom-motorcycle-patches/"><Image width={150} height={50} src="/assets/FullEmbroideredPrintedmob.png" alt="testlogo" /></Link></div>
                            <div className="patch-type-content">
                                <Link href="custom-motorcycle-patches/"><h3>Motorcycle Patches</h3></Link>
                                <div className="patch-type-price">
                                    As low as : <span>$0.14 ea.</span>
                                </div>
                                <div className='patch-type-intro'>
                                    Distinctive with a recognizable style.
                                </div>
                                <div className="patch-type-order">
                                    <Link href="custom-motorcycle-patches/">Order Now</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="patch-type-inner">
                            <div className="patch-type-img"><Link href="custom-sports-patches/"><Image width={150} height={50} src="/assets/sports-patch.webp" alt="testlogo" /></Link></div>
                            <div className="patch-type-content">
                                <Link href="custom-sports-patches/"><h3>Sports Patches</h3></Link>
                                <div className="patch-type-price">
                                    As low as : <span>$0.14 ea.</span>
                                </div>
                                <div className='patch-type-intro'>
                                    Distinctive with a recognizable style.
                                </div>
                                <div className="patch-type-order">
                                    <Link href="custom-sports-patches/">Order Now</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="patch-type-inner">
                            <div className="patch-type-img"><Link href="custom-name-patches/"><Image width={150} height={50} src="/assets/name-patch.webp" alt="testlogo" /></Link></div>
                            <div className="patch-type-content">
                                <Link href="custom-name-patches/"><h3>Name Patches</h3></Link>
                                <div className="patch-type-price">
                                    As low as : <span>$0.14 ea.</span>
                                </div>
                                <div className='patch-type-intro'>
                                    Distinctive with a recognizable style.
                                </div>
                                <div className="patch-type-order">
                                    <Link href="custom-name-patches/">Order Now</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="patch-type-inner">
                            <div className="patch-type-img"><Link href="custom-jacket-patches/"><Image width={150} height={50} src="/assets/jacket-patch.webp" alt="testlogo" /></Link></div>
                            <div className="patch-type-content">
                                <Link href="custom-jacket-patches/"><h3>Jacket Patches</h3></Link>
                                <div className="patch-type-price">
                                    As low as : <span>$0.14 ea.</span>
                                </div>
                                <div className='patch-type-intro'>
                                    Distinctive with a recognizable style.
                                </div>
                                <div className="patch-type-order">
                                    <Link href="custom-jacket-patches/">Order Now</Link>
                                    
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
                    <p>Our military patches are of the highest quality and you are guaranteed to be 100% satisfied.</p>
                    <Link className="btn-herobanner" href="#!" role="button">Call to action</Link>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-cake2" viewBox="0 0 16 16">
  <path d="m3.494.013-.595.79A.747.747 0 0 0 3 1.814v2.683q-.224.051-.432.107c-.702.187-1.305.418-1.745.696C.408 5.56 0 5.954 0 6.5v7c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 15.773 5.898 16 8 16s4.022-.227 5.432-.603c.701-.187 1.305-.418 1.745-.696.415-.261.823-.655.823-1.201v-7c0-.546-.408-.94-.823-1.201-.44-.278-1.043-.51-1.745-.696A12 12 0 0 0 13 4.496v-2.69a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 12 1.813V4.3a22 22 0 0 0-2-.23V1.806a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v2.204a29 29 0 0 0-2 0V1.806A.747.747 0 0 0 7.092.802l-.598-.79-.595.792A.747.747 0 0 0 6 1.813V4.07c-.71.05-1.383.129-2 .23V1.806A.747.747 0 0 0 4.092.802zm-.668 5.556L3 5.524v.967q.468.111 1 .201V5.315a21 21 0 0 1 2-.242v1.855q.488.036 1 .054V5.018a28 28 0 0 1 2 0v1.964q.512-.018 1-.054V5.073c.72.054 1.393.137 2 .242v1.377q.532-.09 1-.201v-.967l.175.045c.655.175 1.15.374 1.469.575.344.217.356.35.356.356s-.012.139-.356.356c-.319.2-.814.4-1.47.575C11.87 7.78 10.041 8 8 8c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 6.639 1 6.506 1 6.5s.012-.139.356-.356c.319-.2.814-.4 1.47-.575M15 7.806v1.027l-.68.907a.94.94 0 0 1-1.17.276 1.94 1.94 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277L1 8.82V7.806c.42.232.956.428 1.568.591C3.978 8.773 5.898 9 8 9s4.022-.227 5.432-.603c.612-.163 1.149-.36 1.568-.591m0 2.679V13.5c0 .006-.012.139-.356.355-.319.202-.814.401-1.47.576C11.87 14.78 10.041 15 8 15c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575-.344-.217-.356-.35-.356-.356v-3.02a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.94.94 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426"/>
</svg>
                            </div>
                            <div className="why-container-content">
                                <h3>Attentive Service</h3>
                                <div className="why-container-desc">
                                    <p>
                                        We have 24-hour professional customer service, if you have any questions can feel free to contact us.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="why-container-inner">
                            <div className="why-inner-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-cake2" viewBox="0 0 16 16">
  <path d="m3.494.013-.595.79A.747.747 0 0 0 3 1.814v2.683q-.224.051-.432.107c-.702.187-1.305.418-1.745.696C.408 5.56 0 5.954 0 6.5v7c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 15.773 5.898 16 8 16s4.022-.227 5.432-.603c.701-.187 1.305-.418 1.745-.696.415-.261.823-.655.823-1.201v-7c0-.546-.408-.94-.823-1.201-.44-.278-1.043-.51-1.745-.696A12 12 0 0 0 13 4.496v-2.69a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 12 1.813V4.3a22 22 0 0 0-2-.23V1.806a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v2.204a29 29 0 0 0-2 0V1.806A.747.747 0 0 0 7.092.802l-.598-.79-.595.792A.747.747 0 0 0 6 1.813V4.07c-.71.05-1.383.129-2 .23V1.806A.747.747 0 0 0 4.092.802zm-.668 5.556L3 5.524v.967q.468.111 1 .201V5.315a21 21 0 0 1 2-.242v1.855q.488.036 1 .054V5.018a28 28 0 0 1 2 0v1.964q.512-.018 1-.054V5.073c.72.054 1.393.137 2 .242v1.377q.532-.09 1-.201v-.967l.175.045c.655.175 1.15.374 1.469.575.344.217.356.35.356.356s-.012.139-.356.356c-.319.2-.814.4-1.47.575C11.87 7.78 10.041 8 8 8c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 6.639 1 6.506 1 6.5s.012-.139.356-.356c.319-.2.814-.4 1.47-.575M15 7.806v1.027l-.68.907a.94.94 0 0 1-1.17.276 1.94 1.94 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277L1 8.82V7.806c.42.232.956.428 1.568.591C3.978 8.773 5.898 9 8 9s4.022-.227 5.432-.603c.612-.163 1.149-.36 1.568-.591m0 2.679V13.5c0 .006-.012.139-.356.355-.319.202-.814.401-1.47.576C11.87 14.78 10.041 15 8 15c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575-.344-.217-.356-.35-.356-.356v-3.02a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.94.94 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426"/>
</svg>
                            </div>
                            <div className="why-container-content">
                                <h3>Quality Assurance</h3>
                                <div className="why-container-desc">
                                    <p>
                                        Patches Co. provides you with the best and most comprehensive after-sales service.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="why-container-inner">
                            <div className="why-inner-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-cake2" viewBox="0 0 16 16">
  <path d="m3.494.013-.595.79A.747.747 0 0 0 3 1.814v2.683q-.224.051-.432.107c-.702.187-1.305.418-1.745.696C.408 5.56 0 5.954 0 6.5v7c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 15.773 5.898 16 8 16s4.022-.227 5.432-.603c.701-.187 1.305-.418 1.745-.696.415-.261.823-.655.823-1.201v-7c0-.546-.408-.94-.823-1.201-.44-.278-1.043-.51-1.745-.696A12 12 0 0 0 13 4.496v-2.69a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 12 1.813V4.3a22 22 0 0 0-2-.23V1.806a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v2.204a29 29 0 0 0-2 0V1.806A.747.747 0 0 0 7.092.802l-.598-.79-.595.792A.747.747 0 0 0 6 1.813V4.07c-.71.05-1.383.129-2 .23V1.806A.747.747 0 0 0 4.092.802zm-.668 5.556L3 5.524v.967q.468.111 1 .201V5.315a21 21 0 0 1 2-.242v1.855q.488.036 1 .054V5.018a28 28 0 0 1 2 0v1.964q.512-.018 1-.054V5.073c.72.054 1.393.137 2 .242v1.377q.532-.09 1-.201v-.967l.175.045c.655.175 1.15.374 1.469.575.344.217.356.35.356.356s-.012.139-.356.356c-.319.2-.814.4-1.47.575C11.87 7.78 10.041 8 8 8c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 6.639 1 6.506 1 6.5s.012-.139.356-.356c.319-.2.814-.4 1.47-.575M15 7.806v1.027l-.68.907a.94.94 0 0 1-1.17.276 1.94 1.94 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277L1 8.82V7.806c.42.232.956.428 1.568.591C3.978 8.773 5.898 9 8 9s4.022-.227 5.432-.603c.612-.163 1.149-.36 1.568-.591m0 2.679V13.5c0 .006-.012.139-.356.355-.319.202-.814.401-1.47.576C11.87 14.78 10.041 15 8 15c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575-.344-.217-.356-.35-.356-.356v-3.02a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.94.94 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426"/>
</svg>
                            </div>
                            <div className="why-container-content">
                                <h3>Free Design</h3>
                                <div className="why-container-desc">
                                    <p>
                                        You give us your idea or design, and we have a professional team to design and modify it for you for free.
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
                            <span>Q: </span> Can I design my own custom patches?
                            </button>
                            </h3>
                            <div id="collapseOneFirstCol" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionFirstCol">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoFirstCol" aria-expanded="false" aria-controls="collapseTwoFirstCol">
                            <span>Q: </span> Are there different backing options are available at Patches Co. ?
                            </button>
                            </h3>
                            <div id="collapseTwoFirstCol" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFirstCol">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeFirstCol" aria-expanded="false" aria-controls="collapseThreeFirstCol">
                            <span>Q:</span> Is shipping free?
                            </button>
                            </h3>
                            <div id="collapseThreeFirstCol" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFirstCol">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                            <span>Q: </span> Can I design my own custom patches?
                            </button>
                            </h3>
                            <div id="collapseOneSecondCol" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionSecondCol">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoSecondCol" aria-expanded="false" aria-controls="collapseTwoSecondCol">
                            <span>Q: </span> Are there different backing options are available at Patches Co. ?
                            </button>
                            </h3>
                            <div id="collapseTwoSecondCol" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionSecondCol">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeSecondCol" aria-expanded="false" aria-controls="collapseThreeSecondCol">
                            <span>Q:</span> Is shipping free?
                            </button>
                            </h3>
                            <div id="collapseThreeSecondCol" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionSecondCol">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
