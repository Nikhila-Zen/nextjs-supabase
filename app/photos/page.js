import Image from 'next/image';
import test1 from '@/public/images/test1.jpg';
import t2 from '@/public/images/t2.jpg';
import t3 from '@/public/images/t3.jpg';
import t4 from '@/public/images/t4.jpg';
import { Metadata } from "next";

export const metadata = {
  title: "Photos",
};

export default function PhotosPage() {
    return (
    <>
    <h1 className="text-2xl mb-8 font-semibold">Photos</h1>
    <div className="grid grid-cols-2 gap-2">
        <div className="h-60"><Image src={test1} className="object-cover h-full w-full" alt="Test Photo" priority={true} quality={100}/></div>
        <div className="h-60"><Image src={t2} className="object-cover h-full w-full" alt="Test Photo" quality={100}/></div>
        <div className="h-60"><Image src={t3} className="object-cover h-full w-full" alt="Test Photo" priority={true}/></div>
        <div className="h-60"><Image src={t4} className="object-cover h-full w-full" alt="Test Photo" placeholder='blur'/></div>
    </div>
    </>
    );
}