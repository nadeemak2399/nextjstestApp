import React, { useState, useRef } from 'react'
import { useForm } from "react-hook-form"

const UseStateComponent = () => {

    const {
            register,
            handleSubmit,
            formState: { errors, isSubmitting },
          } = useForm()
          
    
        const [backingType, setBackingType] = useState("");
        const onOptionChange = e => {
            setBackingType(e.target.value)
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
          let secondreplace;
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
                const uploadImages = await fetch('../api/upload', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .catch(error => console.error(error));
    
                const replacefullName = fullName.replace(/[^a-zA-Z0-9 ]/g,'');
                const replaceuserPhone = userPhone.replace(/[^a-zA-Z0-9 ]/g,'');
                const replaceuserShipAddress = userShipAddress.replace(/[^a-zA-Z0-9 ]/g,'');
                const replaceuserOrderDetails = userOrderDetails.replace(/[^a-zA-Z0-9 ]/g,'');
    
    
                filenames = "http://localhost:3000/uploads/" + files[0].name;
    
    
                
    
                const quotePageType = formPageType.formPageType;
                const response = await fetch('../api/sendEmail', {
                    method: 'POST',
                    headers: {
                      'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        quotePageType,
                        backingType,
                        patchQuantity,
                        customPatchQuantity,
                        patchHeight,
                        patchWidth,
                        sizeUnit,
                        replacefullName, 
                        userEmail, 
                        replaceuserPhone, 
                        replaceuserShipAddress, 
                        replaceuserOrderDetails,
                        filenames
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
  return null
}

export default UseStateComponent
