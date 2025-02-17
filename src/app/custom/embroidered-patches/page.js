import CustomForm from '@/app/components/CustomForm';
import ImageGallery from '@/app/components/ImageGallery';
import ListItemSection from '@/app/components/ListItemSection';
import Link from 'next/link'
export const metadata = {
  title: "Custom Embroidered Patches",
  description: "Design custom embroidered patches with the UK's top patch maker. Choose from iron-on, sew-on, and hook & loop backing options, with free shipping and low minimum orders.",
}

function Page() {


  return (
    <>
    <div className="container ">
        <div className="row align-items-start  mt-5 mb-5">
          <div className="col-8 col-lg-8 col-sm-12 col-cu-12">
            <h1 className='pageTitle'>
            Custom Embroidered Patches
            </h1>
              <p>Looking for embroidered patches in the UK? At Nexus Patches, we specialise in creating custom embroidered patches tailored to your needs. Whether you need patches in bulk online, individual designs for jackets, caps or hats, or uniforms, or <Link className="nav-link" href="https://nexuspatches.co.uk/">custom patches</Link> for clothing backed with premium materials, we’ve got you covered.</p>

              <p>Our expert patch creators use high-quality fabric badges and a high stitch count to craft embroidered badge making solutions that stand out. You can design your patches in any shape, size, or colour, and we’ll ensure the backed with your desired type of finishing. Choose from options like laser cut or finished with a classic merrowed border, or go for heat-and-seal, hook & loop backing option, iron-on patches, Velcro patches, or sew-on patches for ease of application and long-lasting durability.</p>

              <p>We make ordering custom embroidered badges UK simple and stress-free. Just upload your design, and our team will provide a digital proof within 1 business day. Need changes? No problem! Our approval process fast ensures you get exactly what you need. With low minimum fuss, you can order as many or as few patches as you want. Plus, enjoy free shipping free artwork and low minimum service, making us the go-to patch making company in the UK.</p>

              <p>Our embroidered patches are used in various industries, from businesses and organisations to military patches and biker patches. Whether you need woven patches, back patches, or unique pvc patches, we deliver customisation with excellence and precision.</p>

              <p>Request a free quote today and discover why we’re one of the UK’s best patches design companies. With our commitment to delivering durable patches, superior quality, and fast turnaround, Nexus Patches is your trusted partner for all things embroidery.</p>
            <div className='row mt-3 mb-3'>
              <ListItemSection/>
            </div>
          </div>
          <div className="col-4 col-lg-4 col-sm-12 col-cu-12">
            <div className='sidebar-container'>
              <ImageGallery image1="custom-rockford-Embroidery-patches" image2="custom-virginia-spaceport-authority-Embroidery-Patches" image3="custom-honey-bombs-Embroidery-patches" />
            </div>
          </div>
        </div>
          <div className="form-container">
          <CustomForm formPageType="Embroidery patches"/>
          </div>
         
      </div>
      </>
  )
}

export default Page
