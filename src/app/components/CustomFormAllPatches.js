'use client';
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { useForm } from "react-hook-form"

function CustomFormAllPatches({formPageType, formPatchType}) {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm()
      

    const [backingType, setBackingType] = useState("");
    const onOptionChange = e => {
        setBackingType(e.target.value)
      }

    const [choosePatchType, setchoosePatchType] = useState("");
    const onChangeChoosePatchType = e => {
        setchoosePatchType(e.target.value)
      }

    const [patchQuantity, setpatchQuantity] = useState("");
    const onCustomQuantity = e => {
        setpatchQuantity(e.target.value)
      }
      
    const [customPatchQuantity, setcustomPatchQuantity] = useState("");
    const oncustomPatchQuantity = e => {
        setcustomPatchQuantity(e.target.value)
    }

    const [patchHeight, setpatchHeight] = useState();
    const changePatchHeight = e => {
        setpatchHeight(e.target.value)

      }

    const [patchWidth, setpatchWidth] = useState();
    const changePatchWidth = e => {
        setpatchWidth(e.target.value)
    }

    const [sizeUnit, setsizeUnit] = useState("inches");
    const changeSizeUnit = (e) => {
        setsizeUnit(e.target.value);
    };

    const [fullName, setFullName] = useState();
    const changetFullName = (e) => {
        setFullName(e.target.value);
    };
    
    const [userEmail, setUserEmail] = useState();
    const changeUserEmail = (e) => {
        setUserEmail(e.target.value);
    };

    const [userPhone, setUserPhone] = useState();
    const changeUserPhone = (e) => {
        setUserPhone(e.target.value);
    };

    const [userShipAddress, setUserShipAddress] = useState();
    const changeShipAddress = (e) => {
        setUserShipAddress(e.target.value);
    };
    
    const [userOrderDetails, setUserOrderDetails] = useState();
    const changeOrderDetails = (e) => {
        setUserOrderDetails(e.target.value);
    };
    
      let customQfield;
      if (patchQuantity === 'custom Quantity') {
        customQfield = <div className="input-group mb-3">
                <input onChange={oncustomPatchQuantity} value={customPatchQuantity} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                <div className="input-group-append">
                    <span className="input-group-text">Pcs</span>
                </div>
            </div>;
      }


    
    const [files, setFiles] = useState([]);
    const [allImages, setAllImages] = useState();
    const [imagescount, setimagescount] = useState(0);

      let filenames;
      let checkFileName;
      let checkFileNamefiles;
      let checkPatchQuantity;
      const changeFiles = (e) => {
        setFiles(e.target.files);

        let mmmm = e.target.files;
        let count = 0;
        for (let i = 0; i < mmmm.length; i++){
            count ++;
        }
        setimagescount(count)
      };


      const sendMail = async () => {


        


        if ( !patchHeight && !patchWidth  && !patchQuantity  && !fullName  && !userPhone  && !userEmail ) {
           
        }else{

            const formData = new FormData();
            for (const file of files) {
                formData.append("photos", file);
            }

            if(files.length === 0){

                checkFileName = filenames ? filenames : "No Image Uploaded";

            }else{
                
                const uploadImages = await fetch('../api/upload', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .catch(error => console.error(error));
                filenames = "https://nexuspatches.co.uk/uploads/" + files[0].name;

            }
            checkFileNamefiles = checkFileName === 'No Image Uploaded' ? checkFileName : filenames;
            

            const replacefullName = fullName.replace(/[^a-zA-Z0-9 ]/g,'');
            const replaceuserPhone = userPhone.replace(/[^a-zA-Z0-9 ]/g,'');
            const replaceuserShipAddress = userShipAddress.replace(/[^a-zA-Z0-9 ]/g,'');
            const replaceuserOrderDetails = userOrderDetails.replace(/[^a-zA-Z0-9 ]/g,'');

            checkPatchQuantity = patchQuantity === 'custom Quantity' ? customPatchQuantity : patchQuantity;

            const quotePageType = formPageType;
            const response = await fetch('../api/sendEmailAllPatches', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify({
                    quotePageType,
                    backingType,
                    checkPatchQuantity,
                    patchHeight,
                    patchWidth,
                    sizeUnit,
                    replacefullName, 
                    userEmail, 
                    replaceuserPhone, 
                    replaceuserShipAddress, 
                    replaceuserOrderDetails,
                    checkFileNamefiles,
                    choosePatchType
                })
              })



            
        }
      };






      const delay = (d)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve()
            }, d * 1000);
        })
      }

      const onSubmit = async (data) =>{
        await delay(4);
      }
      const fileUploadInput = useRef(null);
      const handleImageUpload = (e) => {
        e.preventDefault();
        fileUploadInput.current.click();
      }


  return (
    <>
        <div className='row mt-3 mb-3'>
            <div className="col-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 col-cu-12">
                <div>
                <h2>Customize Your Order</h2>
                <p>Select all the accurate options to customize your patches order.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                
            <div className='patch-size-container'>
                <span className='steps-heading'> Step 1: Select Patch Size</span>
                <div className='row mb-4 '>
                    <div className='col-4 col-cu-6'>
                        <div className='form-group'>
                            <label htmlFor="sizeUnit">Choose a unit:</label>
                            <select className="form-select" name="sizeUnit" id="sizeUnit" aria-label="Default select example" value={sizeUnit} onChange={changeSizeUnit}>
                                <option value="inches">Inches</option>
                                <option value="centimeter">Centimeter</option>
                                <option value="milimeter">Milimeter</option>
                            </select> 
                        </div>
                    </div>
                    <div className='col-4 col-cu-6'>
                        <div className="form-group ">
                            <label htmlFor="height">Height:</label>
                            <input {...register("height", { required: true })} placeholder='Height' className="form-control" type="number" id="height" name="height" onChange={changePatchHeight} value={patchHeight} />
                            {errors.height && <span className='handleerror'>This field is required</span>}
                        </div>
                    </div>
                    <div className='col-4 col-cu-6'>
                        <div className="form-group">
                            <label htmlFor="width">Width:</label>
                            <input {...register("width", { required: true })} placeholder='Width' className="form-control" type="number" id="width" name="width" value={patchWidth} onChange={changePatchWidth}/>
                            {errors.width && <span className='handleerror'>This field is required</span>}
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="section-patch-type">Select Your Patch Type</div>
                    <div className="input-container col-xs-6 col-md-4">
                        <input onChange={onChangeChoosePatchType} value="Embroidered Patch"  className="form-check-input" type="radio" name="choosePatchType" id={choosePatchType} checked={choosePatchType === "Embroidered Patch"}/>
                        <div className='radio-title'>
                        <Image width={150} height={50} src="/assets/Embroidered-patch-type.webp" alt="Embroidered Patch" />
                            <label className="form-check-label" htmlFor="VelcroBacking">Embroidered Patch
                            </label>
                        </div>
                    </div>
                    <div className="input-container col-xs-6 col-md-4">
                        <input onChange={onChangeChoosePatchType} value="PVC Patch" className="form-check-input" type="radio" name="choosePatchType" id={choosePatchType}  checked={choosePatchType === "PVC Patch"}/>
                        <div className='radio-title'>
                        <Image width={150} height={50} src="/assets/pvc-patch-type.webp" alt="PVC Patch" />
                            <label className="form-check-label" htmlFor="VelcroBacking">PVC Patch
                            </label>
                        </div>
                    </div>
                    <div className="input-container col-xs-6 col-md-4">
                        <input onChange={onChangeChoosePatchType} value="Woven Patch" className="form-check-input" type="radio" name="choosePatchType" id={choosePatchType}  checked={choosePatchType === "Woven Patch"}/>
                        <div className='radio-title'>
                        <Image width={150} height={50} src="/assets/pvc-patch-type.webp" alt="Woven Patch" />
                            <label className="form-check-label" htmlFor="VelcroBacking">Woven Patch
                            </label>
                        </div>
                    </div>
                    <div className="input-container col-xs-6 col-md-4">
                        <input onChange={onChangeChoosePatchType} value="Printed Patch" className="form-check-input" type="radio" name="choosePatchType" id={choosePatchType}  checked={choosePatchType === "Printed Patch"}/>
                        <div className='radio-title'>
                        <Image width={150} height={50} src="/assets/pvc-patch-type.webp" alt="Printed Patch" />
                            <label className="form-check-label" htmlFor="VelcroBacking">Printed Patch
                            </label>
                        </div>
                    </div>
                </div>


            </div>
            <div className='upload-Artwork-Container'>
            <span className='steps-heading'> Step 2: Upload Your Artwork</span>
                <div className='upload-Artwork-inner'>
                    <input ref={fileUploadInput} className="input-artwork" hidden type="file" id="uploadArtwork" name="uploadArtwork" onChange={changeFiles} /> 
                    <Image width={150} height={50} onClick={handleImageUpload} src="/assets/uploadicon.png" alt="Upload Files" />
                    <label>Upload Your Artwork</label>
                    {!imagescount ? "" : "Selected Files: " + imagescount }
                </div>


                
             
            </div>

            <div className='patch-quantity-container'>
            <span className='steps-heading'> Step 3: Select Patch Quantity</span>
                <div className='row'>

                
                <div className="col-12  col-lg-4 col-md-4  col-sm-4 col-cu-4">
                    <label className="form-check-label" htmlFor="patchQ25" >
                    <input className="form-check-input" type="radio" checked={patchQuantity === "25 pcs"}  value="25 pcs" name="patchQuantity" onChange={onCustomQuantity} id="patchQ25"/>
                        25 Pcs
                    </label>
                </div>
                <div className="col-12  col-lg-4 col-md-4  col-sm-4 col-cu-4">
                    <label className="form-check-label" htmlFor="patchQ50" >
                    <input className="form-check-input" type="radio" name="patchQuantity" onChange={onCustomQuantity} id="patchQ50" value="50 pcs" checked={patchQuantity === "50 pcs"} />
                        50 Pcs
                    </label>
                </div>
                <div className="col-12  col-lg-4 col-md-4  col-sm-4 col-cu-4">
                    <label className="form-check-label" htmlFor="patchQ100" >
                    <input className="form-check-input" type="radio" name="patchQuantity" onChange={onCustomQuantity} id="patchQ100" value="100 pcs" checked={patchQuantity === "100 pcs"}  />
                        100 Pcs
                    </label>
                </div>
                <div className="col-12  col-lg-4 col-md-4  col-sm-4 col-cu-4">
                    <label className="form-check-label" htmlFor="patchQ200" >
                    <input className="form-check-input" type="radio" name="patchQuantity" onChange={onCustomQuantity} id="patchQ200" value="200 pcs" checked={patchQuantity === "200 pcs"}  />
                        200 Pcs
                    </label>
                </div>
                <div className="col-12  col-lg-4 col-md-4  col-sm-4 col-cu-4">
                    <label className="form-check-label" htmlFor="patchQ300" >
                    <input className="form-check-input" type="radio" name="patchQuantity" onChange={onCustomQuantity} id="patchQ300" value="300 pcs" checked={patchQuantity === "300 pcs"} />
                        300 Pcs
                    </label>
                </div>
                <div className="col-12  col-lg-4 col-md-4  col-sm-4 col-cu-4">
                    <label className="form-check-label" htmlFor="patchQ500" >
                    <input className="form-check-input" type="radio" name="patchQuantity" onChange={onCustomQuantity} id="patchQ500"  value="500 pcs" checked={patchQuantity === "500 pcs"}/>
                        500 Pcs
                    </label>
                </div>
                <div className="col-12  col-lg-4 col-md-4  col-sm-4 col-cu-4">
                    <label className="form-check-label" htmlFor="patchQ1000" >
                    <input className="form-check-input" type="radio" name="patchQuantity" onChange={onCustomQuantity} id="patchQ1000"  value="1000 pcs" checked={patchQuantity === "1000 pcs"}/>
                        1000 Pcs
                    </label>
                </div>
                <div className="col-12  col-lg-4 col-md-4  col-sm-4 col-cu-4">
                    <label className="form-check-label" htmlFor="patchQ2000" >
                    <input className="form-check-input" type="radio" name="patchQuantity" onChange={onCustomQuantity} id="patchQ2000"  value="2000 pcs" checked={patchQuantity === "2000 pcs"}/>
                        2000 Pcs
                    </label>
                </div>
                <div className="custom-quantity col-12  col-lg-4 col-md-4  col-sm-4 col-cu-4">
                    <label className="form-check-label" htmlFor="patchQcustom" >
                    <input className="form-check-input" type="radio" value="custom Quantity" name="patchQuantity" onChange={onCustomQuantity} id="patchQcustom"/>
                        Custom Quantity 
                    </label>
                </div>

                {customQfield}

            </div>
        </div>
            
        <div className='container-backing-type'>
            <span className='steps-heading'> Step 4: Backing Options</span>
                <div className="input-container col-xs-6 col-md-4 ">
                    <input onChange={onOptionChange} value="Iron-on-Backing" className="form-check-input" type="radio" name="backingType" id={backingType} checked={backingType === "Iron-on-Backing"}/>
                    <div className='radio-title'>
                    <Image width={150} height={50} src="/assets/iron-on-backing.webp" alt="Iron On Backing" />
                        <label className="form-check-label" htmlFor="ironOnBacking">Iron On Backing</label>
                    </div>
                </div>
                <div className="input-container col-xs-6 col-md-4">
                    <input onChange={onOptionChange} value="Sew On Backing" className="form-check-input" type="radio" name="backingType" id={backingType} checked={backingType === "Sew On Backing"}/>
                    <div className='radio-title'>
                    <Image width={150} height={50} src="/assets/No-backing.webp" alt="Sew On Backing" />
                        <label className="form-check-label" htmlFor="SewOnBacking">Sew On Backing</label>
                    </div>
                </div>
                <div className="input-container col-xs-6 col-md-4">
                    <input onChange={onOptionChange} value="Velcro Hook n Loop"  className="form-check-input" type="radio" name="backingType" id={backingType} checked={backingType === "Velcro Hook n Loop"}/>
                    <div className='radio-title'>
                    <Image width={150} height={50} src="/assets/hook-and-loop.webp" alt="Velcro Hook & Loop" />
                        <label className="form-check-label" htmlFor="VelcroBacking">Velcro Hook & Loop
                        </label>
                    </div>
                </div>
                <div className="input-container col-xs-6 col-md-4">
                    <input onChange={onOptionChange} value="Velcro Hook Backing"  className="form-check-input" type="radio" name="backingType" id={backingType} checked={backingType === "Velcro Hook Backing"}/>
                    <div className='radio-title'>
                    <Image width={150} height={50} src="/assets/hook-backing.webp" alt="Velcro Hook Backing" />
                        <label className="form-check-label" htmlFor="VelcroBacking">Velcro Hook Backing
                        </label>
                    </div>
                </div>
                <div className="input-container col-xs-6 col-md-4">
                    <input onChange={onOptionChange} value="Velcro Loop Backing" className="form-check-input" type="radio" name="backingType" id={backingType}  checked={backingType === "Velcro Loop Backing"}/>
                    <div className='radio-title'>
                    <Image width={150} height={50} src="/assets/loop-backing.webp" alt="Velcro Loop Backing" />
                        <label className="form-check-label" htmlFor="VelcroBacking">Velcro Loop Backing
                        </label>
                    </div>
                </div>
            </div>

            
                            
            <div className='container-shipping-details'>
            <span className='steps-heading'> Step 5: Shipping Details</span>
                <div className='row mt-3 mb-3'>
                    <div className='col-6'>
                        <div className="form-group">
                            <label htmlFor="quoteFullName">Full Name</label>
                            <input {...register("quoteFullName", { required: true, pattern: /([A-Za-z])\w+/g  })} type="text" name='quoteFullName' className="form-control" id="quoteFullName" aria-describedby="emailHelp" placeholder="Enter email" value={fullName} onChange={changetFullName} />
                            {errors.quoteFullName && <span className='handleerror'>Special CHars Not Allowed</span>}
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="form-group">
                            <label htmlFor="quoteEmail">Email address</label>
                            <input {...register("quoteEmail", { required: true })} type="email" name='quoteEmail' className="form-control" id="quoteEmail" aria-describedby="emailHelp" placeholder="Enter email" value={userEmail} onChange={changeUserEmail} />
                            {errors.quoteEmail && <span className='handleerror'>This field is required</span>}
                        </div>
                    </div>
                </div>
                <div className='row mt-3 mb-3'>
                    <div className='col-6'>
                        <div className="form-group">
                            <label  htmlFor="quotePhoneNumber">Phone Number</label>
                            <input {...register("quotePhoneNumber", { required: true })} type="text" name='quotePhoneNumber' className="form-control" id="quotePhoneNumber" placeholder="Enter Phone Number" value={userPhone} onChange={changeUserPhone} />
                            {errors.quotePhoneNumber && <span className='handleerror'>This field is required</span>}
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="form-group">
                            <label htmlFor="quoteShipAddress">Shipping Address</label>
                            <input type="text" name='quoteShipAddress' className="form-control" id="quoteShipAddress" placeholder="Enter Shipping Address" value={userShipAddress} onChange={changeShipAddress} />
                        </div>
                    </div>
                    <div className="row mt-3 mb-3">
                        <div className="form-group">
                            <label htmlFor="quoteDetails">Details</label>
                            <textarea  value={userOrderDetails} onChange={changeOrderDetails}  className="form-control" id="quoteDetails" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        
            
            
        { isSubmitting && <div className='container-loadding'><Image width={150} height={50} src="/assets/fade-stagger-circles.svg" alt="Submitting" /></div>  }
        <div className="form-group custom-btn-container">
            <input disabled={isSubmitting} className="btn btn-primary form-control patches-btn" type="submit" onClick={sendMail}  value="Place Order"/>
        </div>
        </form>
        </div>
        
          <div className="col-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-cu-12">

          
            <div className='patch-order-details-container mt-3 mb-3'>
                <div className='patch-order-details-head'>
                    Order Summary
                </div>
                <div className='patch-order-details type'><span>Patch Type: </span><span className='patch-order-type-title'>{formPatchType +" "+choosePatchType}</span></div>
                <div className='patch-order-details-row '>
                    <span className='patch-order-title'>
                        Patch Size
                    </span>
                    <span className='patch-order-details-col'>
                        {patchHeight} x {patchWidth} {sizeUnit} 
                    </span>
                </div>
                <div className='patch-order-details-row '>
                    <span className='patch-order-title'>
                        Artwork File:
                    </span>
                    <span className='patch-order-details-col'>
                    {!imagescount ? "" : imagescount + " Files Selected"}
                    </span>
                </div>
                <div className='patch-order-details-row '>
                    <span className='patch-order-title'>
                        Patch Quantity
                    </span>
                    <span className='patch-order-details-col'>
                        {patchQuantity === 'custom Quantity' ? customPatchQuantity  :patchQuantity }
                    </span>
                </div>
                <div className='patch-order-details-row '>
                    <span className='patch-order-title'>
                        Backing Type
                    </span>
                    <span className='patch-order-details-col'>
                        {backingType}
                    </span>
                </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default CustomFormAllPatches
