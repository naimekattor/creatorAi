export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold ">
              About Creator AI
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-[#f5f5f7] backdrop-blur-sm  shadow-lg rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#f5f5f7] rounded-full mt-3 flex-shrink-0"></div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold ">Our Mission</h2>
                    <p className="text-lg leading-relaxed ">
                      The Creator was founded under the belief that AI and
                      automatization will lead to changes impacting millions of
                      people around the world. While some jobs may be completely
                      displaced, new roles will emerge, requiring workers to
                      acquire different skills and adapt.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8  bg-blue-600/20 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                      </div>
                      <h3 className="text-xl font-semibold">Innovation</h3>
                    </div>
                    <p className="">
                      Leveraging cutting-edge AI technology to revolutionize how
                      people create and optimize their resumes.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                      </div>
                      <h3 className="text-xl font-semibold">Adaptation</h3>
                    </div>
                    <p className="">
                      Helping professionals adapt to the evolving job market
                      with tools that highlight their unique skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <p className="text-gray-500 text-sm">
              Ready to build your future? Start creating your perfect resume
              today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
