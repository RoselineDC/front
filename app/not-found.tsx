"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  const handleSolutions = () => {
    router.push("/solutions");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0D0D0D] via-[#111111] to-[#1a1a1a] px-4">
      <Card className="w-full max-w-lg mx-4 shadow-2xl border border-[#7AC943]/20 bg-white/95 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 px-6 sm:px-8 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#7AC943]/20 rounded-full animate-pulse" />

              <div className="relative h-16 w-16 rounded-full bg-[#7AC943]/10 flex items-center justify-center">
                <AlertCircle className="h-10 w-10 text-[#7AC943]" />
              </div>
            </div>
          </div>

          {/* Company Name */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0D0D0D] mb-2">
            Welcome to{" "}
            <span className="text-[#7AC943]">N.O.B.S Technologies</span>
          </h1>

          {/* Tagline */}
          <h2 className="text-lg font-semibold text-slate-700 mb-4">
            Your Technology Partner
          </h2>

          {/* Message */}
          <p className="text-slate-600 mb-6 leading-relaxed">
            The page you are looking for is currently unavailable or may have
            been moved.
          </p>

          <p className="text-slate-600 mb-8 leading-relaxed">
            N.O.B.S Technologies provides professional technology solutions
            designed to{" "}
            <span className="font-semibold text-[#0D0D0D]">
              connect, protect and power
            </span>{" "}
            your world through reliable networking, security, communication
            and infrastructure solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-[#7AC943] hover:bg-[#68b637] text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>

            <Button
              onClick={handleSolutions}
              variant="outline"
              className="border-[#7AC943] text-[#0D0D0D] hover:bg-[#7AC943]/10 px-6 py-2.5 rounded-lg transition-all duration-200"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Services */}
          {/* <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-sm font-medium text-slate-500 mb-3">
              Technology solutions for your business
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                "CCTV & Security",
                "Networking",
                "Access Control",
                "VoIP Systems",
                "Wireless Links",
                "Data Centre",
              ].map((service) => (
                <span
                  key={service}
                  className="text-xs px-3 py-1.5 rounded-full bg-[#7AC943]/10 text-slate-700 border border-[#7AC943]/20"
                >
                  {service}
                </span>
              ))}
            </div>
          </div> */}

          {/* Footer */}
          {/* <div className="mt-6">
            <p className="text-xs text-slate-400">
              N.O.B.S Technologies
            </p>

            <p className="text-xs text-[#7AC943] font-medium mt-1">
              Connect · Protect · Power
            </p>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}