import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "Designer",
    avatar: "/images/testimonial-img1.png",
    quote:
      "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Love it! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Esther Howard",
    role: "Marketing",
    avatar: "/images/testimonial-img2.png",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    name: "Devon Lane",
    role: "Developer",
    avatar: "/images/testimonial-img3.png",
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-black">
      <div className="container mx-auto  space-y-10 px-4 py-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h3 className="text-[28px] font-semibold text-[#CECECE]">
              What our Users are saying us?
            </h3>
          </div>
          <div className="flex items-center gap-8 text-right">
            <div>
              <div className="text-xl font-semibold text-blue-400">10m+</div>
              <div className="text-xs text-slate-400">Happy People</div>
            </div>
            <div>
              <div className=" space-y-2">
                <div className="text-xl font-semibold text-blue-400">4.88</div>
                <div className="text-xs text-slate-400">Overall rating</div>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className=" bg-[#0f0f0f] shadow-md border-[#0f0f0f]"
            >
              <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                <Image
                  src={t.avatar || "/placeholder.svg"}
                  alt={`${t.name} avatar`}
                  width={77}
                  height={77}
                  className="h-[77px] w-[77px] rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-[18px] font-semibold text-[#CECECE]">
                    {t.name}
                  </CardTitle>
                  <p className="text-xs text-[#AAAAAA]">{t.role}</p>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                  // style={{
                  //   width: "33.31px",
                  //   height: "32.46px",
                  //   left: "0px",
                  //   top: "0px",
                  //   position: "absolute",
                  //   background: "#313131",
                  // }}
                  >
                    <Image
                      width={33}
                      height={33}
                      src="/images/qoute.svg"
                      alt="qoute"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#838383]">{`${t.quote}`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
