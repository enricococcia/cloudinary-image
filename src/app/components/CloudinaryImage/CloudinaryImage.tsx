import cloudinary from '@/app/cloudinary';

const CloudinaryImage = () => {
  const cloudinaryImage = cloudinary.image('brown_sheep.jpg', {
    transformation: [
      { height: 200, width: 300, x: 355, y: 410, crop: 'crop' },
      { height: 100, width: 130, crop: 'fill' },
    ],
  });

  return <div dangerouslySetInnerHTML={{ __html: cloudinaryImage }} />;
};

export default CloudinaryImage;
