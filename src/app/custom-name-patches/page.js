import CustomFormInner from "../components/CustomFormInner";
import ImageGallery from "@/app/components/ImageGallery";
import ListItemSection from "../components/ListItemSection";

export const metadata = {
  title: "Custom Name Patches – Personalised & High-Quality",
  description:
    "Discover custom name patches with various backing options, including iron-on and hook & loop. Choose from embroidered or dye-sublimated styles to perfectly represent your brand or team.",
};

function Page() {
  return (
    <>
      <div className="container ">
        <div className="row align-items-start  mt-5 mb-5">
          <div className="col-8 col-lg-8 col-sm-12 col-cu-12">
            <h1 className="pageTitle">Custom Name Patches</h1>
            <p>
              Custom name patches are a stylish and practical way to personalise
              uniforms, gear, or clothing. With options such as iron-on backing,
              plastic, no backing, hook and loop, or adhesive, you can choose
              the most suitable attachment method for your needs.
            </p>

            <p>
              Embroidered name patches offer a classic look with overlocked
              merrowed borders and colourfast threads, designed to withstand
              harsh washing. Alternatively, dye-sublimated name patches provide
              unlimited colours and intricate detail without the risk of
              fraying.
            </p>

            <p>
              Ideal for businesses, clubs, and uniforms, these high-quality
              custom patches ensure clear identification while representing your
              brand or team with precision and style.
            </p>
            <div className="row mt-3 mb-3">
              <ListItemSection />
            </div>
          </div>
          <div className="col-4 col-lg-4 col-sm-12 col-cu-12">
            <div className="sidebar-container">
              <ImageGallery
                image1="sunset-name-patches"
                image2="rha-name-patches"
                image3="custom-honey-bombs-Embroidery-patches"
              />
            </div>
          </div>
        </div>
        <div className="form-container">
          <CustomFormInner formPageType="Name patches" formPatchType="Name" />
        </div>
      </div>
    </>
  );
}

export default Page;
