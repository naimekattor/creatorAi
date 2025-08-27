import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CircleCheckBig } from "lucide-react";

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

export default function SubscriptionSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[42px] font-bold text-white mb-4">
            Subscription Plans
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan to enhance your resume and land your dream
            job
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-gray-900/50 border-gray-800 hover:border-[#1E90FF] transition-all duration-300 ${
                plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#1E90FF] text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-white text-xl font-bold mb-2">
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-blue-400">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CircleCheckBig className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-[#A7A7A7] text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-[#1E90FF] hover:bg-blue-700 text-white"
                      : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
