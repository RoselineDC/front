"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Video,
  Wifi,
  Lock,
  PhoneCall,
  Antenna,
  Server,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Video,
    title: "CCTV & Security",
  },
  {
    icon: Wifi,
    title: "Networking",
  },
  {
    icon: Lock,
    title: "Access Control",
  },
  {
    icon: PhoneCall,
    title: "VoIP Systems",
  },
  {
    icon: Antenna,
    title: "Wireless Links",
  },
  {
    icon: Server,
    title: "Data Centre",
  },
];

export default function Hero() {
  return (<section className="relative overflow-hidden bg-black"> <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
    <div className="relative z-20 max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 min-h-[720px]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center py-20">

          <h1 className="text-white font-black leading-none tracking-tight">
            <span className="block text-5xl md:text-6xl lg:text-7xl">
              SMART SOLUTIONS.
            </span>

            <span className="block text-[#7AC943] text-5xl md:text-6xl lg:text-7xl mt-2">
              SECURE CONNECTIONS.
            </span>
          </h1>

          <p className="mt-8 text-lg text-white/80 max-w-xl leading-relaxed">
            Professional technology solutions designed to connect,
            protect and power your world.
          </p>

          {/* SERVICES ICONS */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-12 max-w-4xl">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <Icon
                    className="text-[#7AC943] mb-3"
                    size={28}
                  />

                  <span className="text-white text-xs uppercase font-medium leading-tight">
                    {service.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-12">

            <Link
              href="/solutions"
              className="
              bg-[#7AC943]
              hover:bg-[#69b53a]
              text-white
              font-semibold
              px-8
              py-4
              rounded-md
              inline-flex
              items-center
              gap-2
              transition
            "
            >
              Explore Solutions
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="
              border
              border-[#7AC943]
              text-white
              hover:bg-[#7AC943]
              px-8
              py-4
              rounded-md
              font-semibold
              inline-flex
              items-center
              gap-2
              transition
            "
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE COLLAGE */}
        <div className="hidden lg:flex items-center justify-end py-10">
          <div className="relative w-full max-w-3xl h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/hero/hero-main.jpg"
              alt="Technology Infrastructure"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-3 gap-0 w-full max-w-3xl h-[600px] relative">







          </div>
        </div>

      </div>
    </div>
  </section>


  );
}
