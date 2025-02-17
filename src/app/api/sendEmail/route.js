import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');



export async function POST(request) {

    

    try {
        const { quotePageType, backingType, checkPatchQuantity, patchHeight, patchWidth, sizeUnit, replacefullName, userEmail, replaceuserPhone, replaceuserShipAddress, replaceuserOrderDetails, checkFileNamefiles } = await request.json();

        

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "robertbob9988@gmail.com",
                pass: "womcceduyzpxwjiy",
            },
        })

        const mailOption = {
            from: "nexuspathesuk@gmail.com",
            to: "sales@nexuspatches.com",
            subject: replacefullName + " " + quotePageType + " " + "Quote UK",
            html: `
                <h2>${quotePageType} Form</h2>
                <p><b>Patch Quantity: </b>${checkPatchQuantity}</p>
                <p><b>Patch Height: </b>${patchHeight} ${sizeUnit}</p>
                <p><b>Patch Width: </b>${patchWidth} ${sizeUnit}</p>
                <p><b>Patch Backing: </b>${backingType}</p>
                <p><b>Patch Unit: </b>${sizeUnit}</p>
                <p><b>Patch Images: </b>${checkFileNamefiles}</p>
                <p><b>Full Name: </b>${replacefullName}</p>
                <p><b>Email: </b>${userEmail}</p>
                <p><b>Phone Number: </b>${replaceuserPhone}</p>
                <p><b>Shipping Address: </b>${replaceuserShipAddress}</p>
                <p><b>Comments: </b>${replaceuserOrderDetails}</p>
                <p>Best Regards</p>
                `,
                attachments: [
                    {
                        filename: `${checkFileNamefiles === 'No Image Uploaded' ? 'nofile.jpg'  : checkFileNamefiles  }`,
                        path: `${checkFileNamefiles === 'No Image Uploaded' ? process.cwd()+"/public/uploads/nofile.jpg"  : process.cwd() + "/public/uploads/"+ checkFileNamefiles}`
                    },
                ],
        }
        await transporter.sendMail(mailOption);
        

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}