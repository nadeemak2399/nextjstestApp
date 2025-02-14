import CustomFormInner from "../components/CustomFormInner";
import ImageGallery from "@/app/components/ImageGallery";
import ListItemSection from "../components/ListItemSection";

export const metadata = {
  title: "Custom Motorcycle Patches UK - For Bikers and Clubs",
  description: "Get custom biker patches with high-quality embroidery & durable materials! Perfect for jackets, vests & motorcycle clubs. Fast delivery & affordable prices.",
};

function Page() {
  return (
    <>
      <div className="container ">
        <div className="row align-items-start  mt-5 mb-5">
          <div className="col-8 col-lg-8 col-sm-12 col-cu-12">
            <h1 className="pageTitle">Custom Motorcycle Patches</h1>
            <p>Upgrade your gear with high-quality biker patches for jackets! Our custom motorcycle patches are crafted from high-quality raw materials, ensuring durability and long-lasting style.</p>

              <p>Whether you need motorcycle club patches, biker memorial patches, or personalised biker patches in the UK, we’ve got you covered. From embroidered biker patches to cool patches for jackets UK, our collection is designed to make a statement.</p>

              <p>Looking for cheap biker patches without compromising quality? We offer affordable motorcycle badges and best back patches for jackets, perfect for every rider. Choose from leather vest patches, Velcro patches, and more to match your style.</p>

              <p>As a leading biker patch maker, we specialise in custom biker patches made to order with fast turnaround times. Stand out on the road with unique motorcycle patches in the UK. Order today and let your patches tell your story!</p>
            <div className="row mt-3 mb-3">
              <ListItemSection />
            </div>
          </div>
          <div className="col-4 col-lg-4 col-sm-12 col-cu-12">
            <div className="sidebar-container">
              <ImageGallery
                image1="custom-motorcycle-patches-1"
                image2="custom-motorcycle-patches-2"
                image3="custom-motorcycle-patches-3"
              />
            </div>
          </div>
        </div>
        <div className="form-container">
          <CustomFormInner
            formPageType="Motorcycle patches"
            formPatchType="Motorcycle"
          />
        </div>
      </div>
    </>
  );
}

export default Page;
