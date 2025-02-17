import CustomForm from '@/app/components/CustomForm';
import ImageGallery from '@/app/components/ImageGallery';
import ListItemSection from '@/app/components/ListItemSection';
import Link from 'next/link';

export const metadata = {
  title: "Custom PVC Patches",
  description: "Get high-quality custom PVC patches for branding, military, and clothing. Weather-resistant, waterproof & available with Velcro, iron-on, or sew-on backing.",
}

function Page() {


  return (
    <>
    <div className="container ">
        <div className="row align-items-start  mt-5 mb-5">
          <div className="col-8 col-lg-8 col-sm-12 col-cu-12">
            <h1 className='pageTitle'>
            Custom PVC Patches
            </h1>
            <p>Looking for high-quality PVC patches that stand the test of time? Our custom PVC patches are designed for branding and promotion, military and forces, and clothing and accessories. These weather-resistant and waterproof patches maintain their shape and colour in any condition.</p>

              <p>Our PVC patches for jackets, hats, and bags offer a unique design that ensures your logo or artwork stands out. We use sculpted texture 3D look to give depth and precision to every detail. Whether you need PVC patches with Velcro, iron-on, or sew-on backing, we provide multiple options to fit your needs.</p>

              <p>No need to search for PVC patches near me we deliver fast shipping in UK with low minimum order required. Our custom artwork for free service means you can send your ideas, and we’ll bring them to life at no extra cost. With fully personalised designs, you get the freedom to create exactly what you envision. Enjoy premium quality, fast delivery, and budget-friendly rates on <Link className="nav-link" href="https://nexuspatches.co.uk/">Nexus Patches</Link> order today!</p>
            <div className='row mt-3 mb-3'>
            <ListItemSection/>
            </div>
          </div>
          <div className="col-4 col-lg-4 col-sm-12 col-cu-12">
            <div className='sidebar-container'>
              <ImageGallery image1="PVC-Patches-1" image2="PVC-Patches-2" image3="PVC-Patches-3" />
            </div>
          </div>
        </div>
          <div className="form-container">
          <CustomForm formPageType="PVC Patches"/>
          </div>
         
      </div>
      </>
  )
}

export default Page
