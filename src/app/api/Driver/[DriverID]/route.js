import { connect } from "../../../../config/db.js";
import Driver from "../../../../models/Driver/Driver.Model.js";
import cloudinary from "../../../../middlewares/cloudinary.js";
import { catchAsyncErrors } from "../../../../middlewares/catchAsyncErrors.js";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    await connect(); // Connect to the database

    const id = params.UserID;
    const data = await request.formData();

    const userAvatar = data.get("imageUrl");

    let Driveravatar = "";
    let DriveravatarId = "";

    // Helper function to upload images to Cloudinary
    const uploadToCloudinary = async (file) => {
      if (!file) return null; // Return null if no file
      const buffer = Buffer.from(await file.arrayBuffer());
      return new Promise((resolve, reject) => {
        cloudinary.v2.uploader
          .upload_stream({ resource_type: "auto" }, (error, result) => {
            if (error) return reject(error); // Reject on error
            resolve(result); // Resolve with the upload result
          })
          .end(buffer);
      });
    };

    // Handle user avatar upload or use existing URL
    if (userAvatar) {
      const uploadResponse = await uploadToCloudinary(userAvatar);
      if (uploadResponse) {
        Driveravatar = uploadResponse.secure_url;
        DriveravatarId = uploadResponse.public_id;
      }
    }

    const formDataObject = {};
    for (const [key, value] of data.entries()) {
      formDataObject[key] = value;
    }

    const {
      firstName,
      lastName,
      dateOfBirth,
      tel1,
      tel2,
      email,
      licenseNumber,
      niNumber,
      driverNumber,
      taxiFirm,
      badgeType,
      insurance,
      startDate,
      driverRent,
      licenseExpiryDate,
      taxiBadgeDate,
      rentPaymentCycle,
      city,
      county,
      postcode,
      postalAddress,
      permanentAddress,
      isActive,
      imageName,
    } = formDataObject;
    const driver = await Driver.findById(id);

    if (!driver) {
      return NextResponse.json({ error: "User not found", status: 404 });
    }

    // Update user properties with values from formDataObject or retain existing values
    driver.firstName = firstName || driver.firstName;
    driver.lastName = lastName || driver.lastName;
    driver.dateOfBirth = dateOfBirth || driver.dateOfBirth;
    driver.tel1 = tel1 || driver.tel1;
    driver.tel2 = tel2 || driver.tel2;
    driver.email = email || driver.email;
    driver.licenseNumber = licenseNumber || driver.licenseNumber;
    driver.niNumber = niNumber || driver.niNumber;
    driver.driverNumber = driverNumber || driver.driverNumber;
    driver.taxiFirm = taxiFirm || driver.taxiFirm;
    driver.badgeType = badgeType || driver.badgeType;
    driver.insurance = insurance || driver.insurance;
    driver.startDate = startDate || driver.startDate;
    driver.driverRent = driverRent || driver.driverRent;
    driver.licenseExpiryDate = licenseExpiryDate || driver.licenseExpiryDate;
    driver.taxiBadgeDate = taxiBadgeDate || driver.taxiBadgeDate;
    driver.rentPaymentCycle = rentPaymentCycle || driver.rentPaymentCycle;
    driver.city = city || driver.city;
    driver.county = county || driver.county;
    driver.postcode = postcode || driver.postcode;
    driver.postalAddress = postalAddress || driver.postalAddress;
    driver.permanentAddress = permanentAddress || driver.permanentAddress;
    driver.imageName = imageName || driver.imageName;
    driver.isActive = isActive || driver.isActive;

    if (Driveravatar) {
      driver.Driveravatar = Driveravatar;
      driver.DriveravatarId = DriveravatarId;
    }

    await driver.save();

    return NextResponse.json({
      message: "driver details updated successfully",
      driver,
      status: 200,
    });
  } catch (error) {
    console.error("Error updating driver details:", error);
    return NextResponse.json({
      error: "Failed to update driver details",
      status: 500,
    });
  }
}

// GET handler for retrieving a specific product by ID
export async function GET(request, { params }) {
  try {
    // Connect to the database
    await connect();

    // Extract the product ID from the request parameters
    const id = params.DriverID;
    console.log(id);

    // Find the product by ID
    const Find_Driver = await Driver.findById(id);

    // Check if the product exists
    if (!Find_Driver) {
      return NextResponse.json({ result: "No Driver Found", status: 404 });
    } else {
      // Return the found product as a JSON response
      return NextResponse.json({ result: Find_Driver, status: 200 });
    }
  } catch (error) {
    console.error("Error retrieving product:", error);
    // Return an error response
    return NextResponse.json({ message: "Internal Server Error", status: 500 });
  }
}

// Delete a blog post
export async function DELETE(request, context) {
  try {
    const id = context.params.DriverID;
    console.log("User ID:", id);

    // Connect to the database
    await connect();

    // Find the blog by ID
    const driver = await Driver.findById(id);
    console.log("driver:", driver);

    if (!driver) {
      return NextResponse.json({ message: "driver not found", status: 404 });
    }

    const userPublicId = driver.DriveravatarId; // Ensure this matches your schema
    console.log("Image Public ID:", userPublicId);

    // Delete the blog from the database
    const deleteddriver = await Driver.findByIdAndDelete(id);

    if (!deleteddriver) {
      return NextResponse.json({
        message: "Failed to delete driver",
        status: 500,
      });
    }

    // Delete the image from Cloudinary if publicId exists
    if (userPublicId) {
      try {
        const cloudinaryResponse1 = await cloudinary.v2.uploader.destroy(
          userPublicId
        );

        console.log(`Cloudinary response: ${cloudinaryResponse1.result}`);
      } catch (error) {
        console.error("Failed to delete image from Cloudinary:", error);
      }
    }

    return NextResponse.json({
      message: "Driver and associated image deleted successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json({ error: "Failed to delete blog", status: 500 });
  }
}
