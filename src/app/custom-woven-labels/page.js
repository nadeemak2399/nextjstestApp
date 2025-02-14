import ImageGallery from '@/app/components/ImageGallery';
import CustomFormInner from '../components/CustomFormInner';
import ListItemSection from '../components/ListItemSection';

export const metadata = {
  title: "Custom Woven Labels",
  description: "Custom Woven Labels",
}

function Page() {


  return (
    <>
    <div className="container ">
        <div className="row align-items-start  mt-5 mb-5">
          <div className="col-8 col-lg-8 col-sm-12 col-cu-12">
            <h1 className='pageTitle'>
            Woven Labels
            </h1>
              <p>
              It's hard to beat the traditional good looks of an embroidered patch. The raised polyester thread offers a 3-dimensional sheen and bold appearance. Custom embroidered patches are used in a wide range of applications, from police and fire department uniforms to caps, beanies, jackets and other outerwear. They include a plastic backing for durability and up to 8 thread colors. They can be laser cut or finished with a customary merrowed border. We also offer a Hook & Loop backing option (like Velcro) for military style patches. Iron on patches or peel & stick patches are also available options.
            </p>
            <p>
              Upload your finished embroidered patch design or just a simple logo. Our team will help finalize your patch design and send you a digital proof within one business day. You may approve it or make changes if necessary before production begins. A team member will be assigned to your order in case you have any questions. 
            </p>
            <div className='row mt-3 mb-3'>
            <ListItemSection />
            </div>
          </div>
          <div className="col-4 col-lg-4 col-sm-12 col-cu-12">
            <div className='sidebar-container'>
              <ImageGallery image1="custom-rockford-Embroidery-patches" image2="custom-virginia-spaceport-authority-Embroidery-Patches" image3="custom-honey-bombs-Embroidery-patches" />
            </div>
          </div>
        </div>
          <div className="form-container">
          <CustomFormInner formPageType="Embroidery patches" formPatchType="Woven"/>
          </div>
         
      </div>
      </>
  )
}

export default Page
