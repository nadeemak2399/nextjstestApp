import CustomFormAllPatches from '../components/CustomFormAllPatches';

export const metadata = {
  title: "Customize Your Order",
  description: "Choose all the correct options to personalize your custom patch order.",
}

function Page() {


  return (
    <>
    <div className="container ">
          <div className="form-container">
            <CustomFormAllPatches formPageType="All Patches Form" formPatchType="Custom"/>
          </div>
         
      </div>
      </>
  )
}

export default Page
