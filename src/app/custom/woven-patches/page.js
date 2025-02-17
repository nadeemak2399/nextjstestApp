import CustomForm from '@/app/components/CustomForm';
import ImageGallery from '@/app/components/ImageGallery';
import ListItemSection from '@/app/components/ListItemSection';
import Link from 'next/link';
export const metadata = {
  title: "Custom Woven Patches UK - Nexus Patches",
  description: "Order custom woven patches with intricate details and a smooth texture. Ideal for logos, uniforms, and branding.",
}

function Page() {


  return (
    <>
    <div className="container ">
        <div className="row align-items-start  mt-5 mb-5">
          <div className="col-8 col-lg-8 col-sm-12 col-cu-12">
            <h1 className='pageTitle'>
            Custom Woven Patches
            </h1>
            <p>Woven patches are the perfect solution for designs requiring intricate details, fine lettering, and a smooth, professional finish. Using ultra-thin threads, these patches achieve superior clarity compared to traditional embroidery. Their tight weave structure ensures crisp definition, making them ideal for complex logos, small text, and highly detailed artwork. The lightweight yet durable nature of woven patches makes them suitable for uniforms, corporate branding, apparel, sportswear, and promotional merchandise.</p>

            <p>Unlike <Link className="nav-link" href="https://nexuspatches.co.uk/custom/embroidered-patches">embroidered patches</Link>, woven patches eliminate the bulky texture, providing a sleek and refined look that enhances any garment or accessory. Their smooth finish allows for precise colour matching, ensuring brand consistency across multiple applications. Whether applied to hats, jackets, bags, or uniforms, woven patches maintain their premium appearance while offering long-lasting durability. Various backing options, including iron-on, sew-on, hook & loop, and peel & stick, make them versatile for different attachment needs.</p>

            <p>For businesses, organisations, and fashion brands seeking high-quality patches with exceptional detail, woven patches are the ideal choice. At NexusPatches, we provide expert craftsmanship, free design assistance, and fast delivery with low minimum order quantities. Elevate your branding with custom woven patches designed for precision, durability, and style.</p>
            <div className='row mt-3 mb-3'>
            <ListItemSection />
            </div>
          </div>
          <div className="col-4 col-lg-4 col-sm-12 col-cu-12">
            <div className='sidebar-container'>
            <ImageGallery image1="custom-crossfit-woven-patch" image2="Custom-gym-woven-patch" image3="Custom-RSE-woven-patch" />
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
