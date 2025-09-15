const CustomAICompanyCredentials = ({
  title,
  description,
  image,
  background,
}) => {
  return (
    <section className="relative py-20 px-4 bg-white">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${background})` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {title}
            </h2>
            <div className="space-y-6">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={image || "/placeholder.svg"}
              alt="Why Choose Us"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomAICompanyCredentials;
