import cloudinary from "@/app/cloudinary";

const CloudinaryImage = () => {
  const cloudinaryImage = cloudinary.image("dev/wkzhgskc5jruztddyhki", {
    // transformation: [
    //   { height: 200, width: 300, x: 355, y: 410, crop: "crop" },
    //   { height: 100, width: 130, crop: "fill" },
    // ],
    transformation: [
      { effect: "cartoonify" },
      { radius: "max" },
      { effect: "outline:100", color: "lightblue" },
      { background: "lightblue" },
      { height: 300, crop: "scale" },
    ],
    sign_url: true,
    type: "private",
  });

  return <div dangerouslySetInnerHTML={{ __html: cloudinaryImage }} />;
};

export default CloudinaryImage;
