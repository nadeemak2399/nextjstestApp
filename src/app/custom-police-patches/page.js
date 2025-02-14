import CustomFormInner from "../components/CustomFormInner";
import ImageGallery from "@/app/components/ImageGallery";
import ListItemSection from "../components/ListItemSection";

export const metadata = {
  title: "Custom Police Patches UK – High-Quality & Durable",
  description:
    "Get high-quality custom police patches with durable Velcro and iron-on backing! Perfect for uniforms, tactical gear & law enforcement. Fast turnaround & hassle-free orders.",
};

function Page() {
  return (
    <>
      <div className="container ">
        <div className="row align-items-start  mt-5 mb-5">
          <div className="col-8 col-lg-8 col-sm-12 col-cu-12">
            <h1 className="pageTitle">Custom Police Patches</h1>
            <p>
              Get custom police patches designed for uniforms, tactical gear,
              and accessories. Made with high-quality materials and durable
              Velcro and iron-on backing, our patches offer secure attachment
              and long-lasting wear.
            </p>

            <p>
              We provide personalised police patches for law enforcement,
              security teams, and emergency services. With fast turnaround times
              and efficient ordering, we ensure hassle-free repeat orders.
              Whether you need a small batch or bulk order, our custom police
              patches deliver exceptional quality and durability. Order today!{" "}
            </p>
            <div className="row mt-3 mb-3">
              <ListItemSection />
            </div>
          </div>
          <div className="col-4 col-lg-4 col-sm-12 col-cu-12">
            <div className="sidebar-container">
              <ImageGallery
                image1="hughes-police-patch"
                image2="pvc-police-patch"
                image3="winnsbros-police-patch"
              />
            </div>
          </div>
        </div>
        <div className="form-container">
          <CustomFormInner
            formPageType="Police patches"
            formPatchType="Police"
          />
        </div>
      </div>
    </>
  );
}

export default Page;
