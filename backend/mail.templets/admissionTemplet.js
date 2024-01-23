const admissionTemp = ({admissionData}) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Admission Details</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }

                .admission-details {
                    max-width: 600px;
                    margin: auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .photo-container{
                    display: grid;
                    gap: 10px;
                    grid-template-columns: repeat(2,1fr);
                }
                .photo-container img {
                    height: auto;
                    width: 100%;
                    margin-top: 20px;
                }

                .action-buttons {
                    margin-top: 20px;
                    display: flex;
                    gap: 10px;
                }

                
                .action-buttons > a {
                    text-decoration: none;
                    color: #fff;
                    margin-right: 10px;
                }

                .accept-button, .reject-button {
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    border: none;
                    border-radius: 5px;
                    color: #fff;
                    font-weight: bold;
                }

                .accept-button {
                    background-color: #4CAF50;
                }

                .reject-button {
                    background-color: #f44336;
                }
            </style>
        </head>
        <body>
            <div class="admission-details">
                <h2>Admission Details</h2>

                <p><strong>Full Name:</strong> ${admissionData?.fullname}</p>
                <p><strong>Date of Birth:</strong> ${admissionData?.dateofbirth}</p>
                <p><strong>Course:</strong> ${admissionData?.course}</p>
                <p><strong>Gender:</strong> ${admissionData?.gender}</p>
                <p><strong>Occupation:</strong> ${admissionData?.occupation}</p>
                <p><strong>Email:</strong> ${admissionData?.email}</p>
                <p><strong>Alt Email:</strong> ${admissionData?.altEmail}</p>
                <p><strong>Mobile Number:</strong> ${admissionData?.mobileNumber}</p>
                <p><strong>Phone Number:</strong> ${admissionData?.phoneNumber}</p>
                <p><strong>Address:</strong> ${admissionData?.address}</p>
                <p><strong>City:</strong> ${admissionData?.city}</p>
                <p><strong>State:</strong> ${admissionData?.state}</p>
                <p><strong>Country:</strong> ${admissionData?.country}</p>
                <p><strong>Pincode:</strong> ${admissionData?.pincode}</p>
            
                <div class="photo-container">
                    <img src=${admissionData?.cv?.location} alt="Passport Photo">
                    <img src=${admissionData?.passportphoto?.location} alt="Passport Photo">
                </div>
        
                <div class="action-buttons">
                    <a href='#' target='_blank' class="accept-button" >Accept</a>
                    <a href='#' target='_blank' class="reject-button" >Reject</a>
                </div>
            </div>
    
    </body>
    </html>
    `
}
module.exports = { admissionTemp }