import ImageGallery from '@/app/components/ImageGallery';
import CustomFormInner from '../components/CustomFormInner';
import ListItemSection from '../components/ListItemSection';

export const metadata = {
  title: "Custom Woven Labels UK | Premium Clothing Labels – Fast Delivery",
  description: "Get high-quality custom woven labels in the UK! Durable damask, satin & cotton labels with fast 10-12 business days delivery. ",
}

function Page() {


  return (
    <>
    <div className="container ">
        <div className="row align-items-start  mt-5 mb-5">
          <div className="col-8 col-lg-8 col-sm-12 col-cu-12">
            <h1 className='pageTitle'>
            Custom Woven Labels
            </h1>
            <p>Looking for premium woven labels in the UK? Our custom woven clothing labels are designed for durability, softness, and a high-end finish. Crafted from 100% polyester threads, our damask woven labels offer a luxurious texture, ensuring long-lasting quality. Whether you need sew-on, iron-on, or stick-on labels, we provide fast delivery with low minimum order quantities.</p>

            <p>We specialise in designer labels, care labels, name tapes, and identification labels, perfect for garment brands, handmade crafts, and school uniforms. Choose from damask, satin, or cotton woven labels, each available in straight cut, end fold, centre fold, and mitre fold options.</p>

            <p>Enhance your brand with professionally woven labels, laser-cut to your preferred shape. Our money-back guarantee ensures your satisfaction. Order today and give your garments the ultimate luxury touch with the best woven labels in the UK!</p>
            <div className='row mt-3 mb-3'>
            <ListItemSection />
            </div>
          </div>
          <div className="col-4 col-lg-4 col-sm-12 col-cu-12">
            <div className='sidebar-container'>
              <ImageGallery image1="custom-woven-labels-1" image2="custom-woven-labels-2" image3="custom-woven-labels-3" />
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
