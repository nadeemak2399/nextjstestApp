import CustomFormInner from "../components/CustomFormInner";
import ImageGallery from "@/app/components/ImageGallery";
import ListItemSection from "../components/ListItemSection";

export const metadata = {
  title: "Custom Military Patches UK – Morale & Tactical Badges",
  description:
    "Get high-quality custom military patches with durable Velcro backing! Perfect for army and tactical use. Fast turnaround & hassle-free orders.",
};

function Page() {
  return (
    <>
      <div className="container ">
        <div className="row align-items-start  mt-5 mb-5">
          <div className="col-8 col-lg-8 col-sm-12 col-cu-12">
            <h1 className="pageTitle">Custom Military Patches</h1>
            <p>
              Get high-quality custom military badges designed for military
              morale patches, tactical patches, and army badges. Our custom
              military patches are crafted with durable Velcro backing, ensuring
              a secure attachment that can withstand time, even in tough
              conditions.
            </p>

            <p>
              We offer personalised military morale patches in the UK for
              British police, military, and armed forces. The hook and loop
              system provides extra strength, making them ideal for any combat
              uniform, backpack, or cap.
            </p>

            <p>
              With efficient ordering and delivery, we guarantee fast
              turnarounds and hassle-free repeat orders. Whether you need a
              small batch or a bulk order, our process ensures a seamless
              transition from existing designs to enhanced custom patches.
            </p>

            <p>
              Choose from exceptional custom badge designs, various materials,
              colours, and styles, or create your own unique patch. Order your
              morale patches today and make a statement with British custom
              military patches!
            </p>
            <div className="row mt-3 mb-3">
              <ListItemSection />
            </div>
          </div>
          <div className="col-4 col-lg-4 col-sm-12 col-cu-12">
            <div className="sidebar-container">
              <ImageGallery
                image1="custom-Military-Patches"
                image2="custom-military-patches-unit"
                image3="custom-Military-Patches-guard"
              />
            </div>
          </div>
        </div>
        <div className="form-container">
          <CustomFormInner
            formPageType="Military patches"
            formPatchType="Military"
          />
        </div>
      </div>
    </>
  );
}

export default Page;
