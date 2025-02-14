'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'


export default function PageRedirect() {

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 sec
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="section-thankyou">
       <div className="section-thankyou-inner">
            <Image width={200} height={200} src="/assets/thank-you.webp" alt="Upload Files" />
            <h1 className="text-3xl font-bold text-green-600">Thank You!</h1>
            <p className="mt-4 text-gray-600">Your submission has been received. We appreciate your support!</p>
       </div>
    </div>
  );
}
