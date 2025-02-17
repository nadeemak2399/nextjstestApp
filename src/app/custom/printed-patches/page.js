import CustomForm from '@/app/components/CustomForm';
import ImageGallery from '@/app/components/ImageGallery';
import ListItemSection from '@/app/components/ListItemSection';
import Link from 'next/link';
export const metadata = {
  title: "Custom Printed Patches | Full-Colour Dye Sublimation",
  description: "Order custom printed patches with photorealistic designs and vibrant colours. Multiple backing options available. Fast turnaround & free delivery.",
}

function Page() {


  return (
    <>
    <div className="container ">
        <div className="row align-items-start  mt-5 mb-5">
          <div className="col-8 col-lg-8 col-sm-12 col-cu-12">
            <h1 className='pageTitle'>
            Custom Printed Patches
            </h1>
            <p>Enhance your branding with custom-printed patches, designed to deliver photorealistic detail, vibrant colours, and high-definition artwork. Using advanced dye sublimation technology, these patches accurately replicate complex designs, gradients, and fine details that traditional embroidery cannot achieve.</p>

            <p>Perfect for fashion, corporate branding, uniforms, and promotional merchandise, printed patches offer unlimited colour options for striking visual appeal. With multiple backing choices, including iron-on, sew-on, peel-and-stick, and hook & loop, they ensure seamless application on any fabric. Crafted from premium materials, our patches maintain long-lasting colour brilliance and durability without fading or cracking.</p>

            <p>At <Link className="nav-link" href="https://nexuspatches.co.uk/">NexusPatches</Link>, we guarantee precision, quality, and fast turnaround times. Whether you need single-unit production or bulk orders, our expert team ensures flawless execution. Order today for free shipping across the UK, and bring your custom designs to life with superior printed patches.</p>
            <div className='row mt-3 mb-3'>
              <ListItemSection/>
            </div>
          </div>
          <div className="col-4 col-lg-4 col-sm-12 col-cu-12">
            <div className='sidebar-container'>
            <ImageGallery image1="Custom-2024-statwide-FEYC-Unatilla-ptinted-patch" image2="Custom-black-student-union-ptinted-patch" image3="custom-fifth-element-printed-patch" />
            </div>
          </div>
        </div>
          <div className="form-container">
          <CustomForm formPageType="Printed Patches"/>
          </div>
         
      </div>
      </>
  )
}

export default Page
