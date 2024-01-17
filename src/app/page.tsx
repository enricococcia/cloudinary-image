import Image from 'next/image';
import CloudinaryImage from './components/CloudinaryImage/CloudinaryImage';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around lg:p-24">
      <Image
        className="mb-6"
        src="/deltatre.svg"
        alt="Deltatre Logo"
        width={146}
        height={25}
        priority
      />
      <div className="relative flex gap-4 place-items-center">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <Image
          src="/cloudinary.svg"
          alt="Cloudinary Logo"
          width={156}
          height={30}
          priority
        />
      </div>
      <div className="mt-4">
        <CloudinaryImage />
      </div>
    </main>
  );
}
