"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function CertificateDetails() {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const issuer = searchParams.get("issuer");
  const date = searchParams.get("date");
  const image = searchParams.get("image");

  console.log({ id, title, issuer, date, image });

  if (!id || !title || !issuer || !date || !image) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Certificate not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#eed6da] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl bg-white rounded-lg shadow-md overflow-hidden p-8">
        <Image
          src={image}
          alt={`${title} certificate`}
          width={600}
          height={400}
          className="w-full h-auto object-cover mb-6 rounded"
        />
        <h1 className="text-3xl font-extrabold text-headcolor mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-2">
          <strong>Issued by:</strong> {issuer}
        </p>
        <p className="text-lg text-gray-600">
          <strong>Date:</strong> {date}
        </p>
      </div>
    </div>
  );
}
