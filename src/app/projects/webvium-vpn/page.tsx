import { ArrowLeft, Plus } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webvium VPN - Melvin Jones Repol",
  description:
    "Anonymous, Secured, Private and the fastest Virtual Private Network.",
  keywords: [
    "Webvium VPN",
    "Virtual Private Network",
    "VPN",
    "Anonymous VPN",
    "Secured VPN",
    "Private VPN",
    "Fast VPN",
    "Android VPN",
    "Internet Security",
    "Online Privacy",
  ],
  alternates: {
    canonical: "https://www.melvinjonesrepol.com/projects/webvium-vpn",
  },
  openGraph: {
    title: "Webvium VPN - Melvin Jones Repol",
    description:
      "Anonymous, Secured, Private and the fastest Virtual Private Network.",
    url: "https://www.melvinjonesrepol.com/projects/webvium-vpn",
    siteName: "Melvin Jones Repol",
    images: [
      {
        url: "/images/webviumvpn-1.jpg",
        width: 800,
        height: 600,
        alt: "Webvium VPN Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webvium VPN - Melvin Jones Repol",
    description:
      "Anonymous, Secured, Private and the fastest Virtual Private Network.",
    images: ["/images/webviumvpn-1.jpg"],
    creator: "@mrepol742",
  },
};

const Images = [
  "/images/webviumvpn-1.jpg",
  "/images/webviumvpn-2.jpg",
  "/images/webviumvpn-3.jpg",
  "/images/webviumvpn-4.jpg",
];

export default function WebviumVPN() {
  return (
    <main className="p-8">
      <section>
        <Link
          className="flex items-center mb-4 hover:text-violet-500 transition-colors duration-200"
          href="/projects"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          <h3 className="text-2xl font-semibold">Projects</h3>
        </Link>

        <div className="flex items-center mb-4">
          <Image
            src="/images/webviumvpn-transparent-icon.png"
            alt="Webvium VPN Icon"
            width={70}
            height={70}
            className="bg-white rounded-full mr-7"
          />
          <div>
            <h1 className="text-4xl font-bold">Webvium VPN</h1>
            <p className="text-gray-300 mb-4">
              Anonymous, Secured, Private and the fastest Virtual Private
              Network.
            </p>
          </div>
        </div>

        <div className="w-full mb-8">
          <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent py-2">
            {Images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Screenshot ${index + 1}`}
                width={250}
                height={445}
                className="object-cover rounded-lg flex-shrink-0 border border-gray-700 hover:scale-99 transition-transform duration-200"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
