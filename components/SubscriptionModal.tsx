"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleCheckBig, X } from "lucide-react";

interface SubscriptionModalProps {
  onClose: () => void;
}

const plans = [
  {
    name: "Resume Rewrite",
    price: "$8",
    period: "/month",
    description: "Designed to evaluate and enhance the existing resume",
    features: [
      "Full resume review",
      "Content improvement & enhancing existing resume",
      "Tailored keywords & integration with industry-specific keywords",
      "Formatting enhancements with improved layout & readability",
    ],
    popular: false,
    buttonText: "Get Started",
  },
  {
    name: "Basic Tier",
    price: "$10",
    period: "/month",
    description: "Access to standard templates",
    features: [
      "Basic information",
      "Brief statement outlining career goals",
      "Clear sections with headings for education, work experience and skillset",
      "Bullet points for easy reading",
    ],
    popular: false,
    buttonText: "Get Started",
  },
  {
    name: "Pro Tier",
    price: "$12",
    period: "/month",
    description: "Includes more detailed information",
    features: [
      "Personal branding statement",
      "Links to LinkedIn profile and personal website",
      "Tailored summary of Profile section",
      "Relevant experience featuring skills, achievements, projects etc.",
      "Keywords to align with Job descriptions and pass Applicant Tracking Systems (ATS)",
    ],
    popular: true,
    buttonText: "Get Started",
  },
  {
    name: "Premium Tier",
    price: "$16",
    period: "/month",
    description:
      "Suitable for applying in different Industry sectors and those who are looking for career change",
    features: [
      "Personal branding statement",
      "Links to LinkedIn profile and personal website",
      "Industry specific keywords to enhance compatibility with ATS",
      "Flexible format for easy adjustments and different job applications",
      "Personalized summary of profile section",
    ],
    popular: false,
    buttonText: "Get Started",
  },
];

export default function SubscriptionModal({ onClose }: SubscriptionModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 pt-8 pb-8 px-2 sm:px-4 overflow-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-[#f5f5f7] rounded-2xl p-4 sm:p-6 md:p-10 shadow-xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-[#364056] mb-2">
            Subscription Plans
          </h2>
          <p className="text-[#364056] text-sm md:text-lg max-w-2xl mx-auto">
            Choose the perfect plan to enhance your resume and land your dream
            job
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative bg-white border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col h-full ${
                plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-white text-lg md:text-xl font-bold mb-2">
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-2xl md:text-3xl font-bold text-blue-400">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-[#4C5467] text-sm md:text-base">
                  {plan.description}
                </p>
              </CardHeader>

              {/* Make CardContent grow to push button down */}
              <CardContent className="flex flex-col flex-grow pt-2 md:pt-0 justify-between">
                <ul className="space-y-2 mb-4 md:mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CircleCheckBig className="w-4 md:w-5 h-4 md:h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-[#4C5467] text-xs md:text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full mt-auto ${
                    plan.popular
                      ? "bg-[#1e90ff] hover:bg-blue-600 text-white"
                      : "bg-[#364056] hover:bg-gray-600 text-white border border-gray-600"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
