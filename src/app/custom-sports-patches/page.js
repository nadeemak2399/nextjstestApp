import CustomFormInner from '../components/CustomFormInner';
import ImageGallery from '@/app/components/ImageGallery';
import ListItemSection from '../components/ListItemSection';

export const metadata = {
  title: "Custom Sports Patches UK for Teams & Clubs",
  description: "Sports Patches",
}

function Page() {


  return (
    <>
    <div className="container ">
        <div className="row align-items-start  mt-5 mb-5">
          <div className="col-8 col-lg-8 col-sm-12 col-cu-12">
            <h1 className='pageTitle'>
            Custom Sports Patches
            </h1>
              <p>
              Need high-quality custom sports patches in the UK? We create high-quality embroidered, woven, and printed patches for team uniforms, jerseys, caps, and bags. Our durable and washable sports patches come with iron-on, sew-on, or Velcro backing for easy application.
            </p>
            <p>
            Perfect for football, rugby, cricket, cycling and other teams, our patches are customisable in any shape, size, and colour to match your team’s identity. Whether you need player name patches, club logos, or event badges, we ensure fast turnaround and premium quality.
            </p>
            <div className='row mt-3 mb-3'>
            <ListItemSection />
            </div>
          </div>
          <div className="col-4 col-lg-4 col-sm-12 col-cu-12">
            <div className='sidebar-container'>
              <ImageGallery image1="Custom-artaban-sports-patch" image2="custom-virginia-spaceport-authority-Embroidery-Patches" image3="custom-honey-bombs-Embroidery-patches" />
            </div>
          </div>
        </div>
          <div className="form-container">
          <CustomFormInner formPageType="Sports patches" formPatchType="Sports"/>
          </div>
         
      </div>
      </>
  )
}

export default Page
