import CustomFormInner from '../components/CustomFormInner';
import ImageGallery from '@/app/components/ImageGallery';
import ListItemSection from '../components/ListItemSection';

export const metadata = {
  title: "Custom Velcro Patches UK – High Quality & Durable",
  description: "Get high-quality custom Velcro patches with low minimum order & free delivery! Durable, secure, and easy to install, perfect for military, police, firefighters & more.",
}

function Page() {


  return (
    <>
    <div className="container ">
        <div className="row align-items-start  mt-5 mb-5">
          <div className="col-8 col-lg-8 col-sm-12 col-cu-12">
            <h1 className='pageTitle'>
            Custom Velcro Patches
            </h1>
              <p>Custom Velcro patches offer a simple installation operation, making them easy to attach and remove. Designed for outdoor use, they provide firm support and secure hold, even in extreme weather conditions.</p>
              <p>Our high-quality material ensures that these patches remain durable over time. With multiple hooks on the surface, the hook backing works well on various fabrics. It pairs perfectly with the loop backing, which features dense loops of fluff for a soft and flexible grip.</p>
              <p>For those needing frequent replacement, the double Velcro backing combines hook and loop fasteners for extra convenience. Army morale patches, firefighter ranks, and police units often use custom Velcro name patches to display identity and unity.</p>
              <p>Upgrade your gear with durable custom Velcro patches! Personalised designs with no minimum order ensure the perfect fit for everyone. Get high-quality and durable custom patches with free delivery today.</p>
            <div className='row mt-3 mb-3'>
            <ListItemSection />
            </div>
          </div>
          <div className="col-4 col-lg-4 col-sm-12 col-cu-12">
            <div className='sidebar-container'>
              <ImageGallery image1="100-miles-Velcro-Patches" image2="incas-Velcro-Patches" image3="ter-Velcro-Patches" />
            </div>
          </div>
        </div>
          <div className="form-container">
          <CustomFormInner formPageType="Velcro patches" formPatchType="Velcro"/>
          </div>
         
      </div>
      </>
  )
}

export default Page
