import CustomFormInner from '../components/CustomFormInner';
import ImageGallery from '@/app/components/ImageGallery';

export const metadata = {
  title: "Custom Motorcycle Patches",
  description: "Motorcycle Patches",
}

function Page() {


  return (
    <>
    <div className="container ">
        <div className="row align-items-start  mt-5 mb-5">
          <div className="col-8 col-lg-8 col-sm-12 col-cu-12">
            <h1 className='pageTitle'>
            Motorcycle Patches
            </h1>
              <p>
              It's hard to beat the traditional good looks of an embroidered patch. The raised polyester thread offers a 3-dimensional sheen and bold appearance. Custom embroidered patches are used in a wide range of applications, from police and fire department uniforms to caps, beanies, jackets and other outerwear. They include a plastic backing for durability and up to 8 thread colors. They can be laser cut or finished with a customary merrowed border. We also offer a Hook & Loop backing option (like Velcro) for military style patches. Iron on patches or peel & stick patches are also available options.
            </p>
            <p>
              Upload your finished embroidered patch design or just a simple logo. Our team will help finalize your patch design and send you a digital proof within one business day. You may approve it or make changes if necessary before production begins. A team member will be assigned to your order in case you have any questions. 
            </p>
            <div className='row mt-3 mb-3'>
            <div className='col-6 col-lg-6  mt-3 mb-3 col-cu-12'>
                <ul className="container-list">
                  <li>Up to 8 thread colors</li>
                  <li>Merrowed edge included</li>
                  <li>Sew-on, iron-on, peel &amp; stick or hook &amp; loop</li>
                  <li>Free sample photo option</li>
                  <li>Graphic artwork assistance</li>
                  <li>Fast turnaround &amp; delivery</li>
              </ul>
            </div>
            <div className='col-6 col-lg-6 mt-3 mb-3 col-cu-12 '>
              <div className='container-small-content'>
                <h3>Our Order Process</h3>
                <ol>
                  <li>Get your Digital Proof within 1 business day. Approve or reject your proof from your customer account.</li>
                  <li>If Sample Photo is selected, receive it within 5 business days of approving your digital proof.</li>
                  <li>After your approvals are complete, view your Ship Date in your customer account.</li>
                </ol>
              </div>
            </div>
            </div>
          </div>
          <div className="col-4 col-lg-4 col-sm-12 col-cu-12">
            <div className='sidebar-container'>
              <ImageGallery image1="custom-rockford-Embroidery-patches" image2="custom-virginia-spaceport-authority-Embroidery-Patches" image3="custom-honey-bombs-Embroidery-patches" />
            </div>
          </div>
        </div>
          <div className="form-container">
          <CustomFormInner formPageType="Motorcycle patches" formPatchType="Motorcycle"/>
          </div>
         
      </div>
      </>
  )
}

export default Page
