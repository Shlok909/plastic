const steps = [
  {
    number: '01',
    title: 'Collection & Sourcing',
    description: 'We partner with local waste collectors and communities to gather post-consumer plastic.',
  },
  {
    number: '02',
    title: 'Sorting & Cleaning',
    description: 'Plastic is manually sorted, cleaned, and prepped to ensure purity and consistency.',
  },
  {
    number: '03',
    title: 'Processing & Upcycling',
    description: 'Sorted plastic is shredded, melted, and pressed into versatile eco-sheets.',
  },
  {
    number: '04',
    title: 'Design & Manufacture',
    description: 'We use templates which customers can customize. Then we manufacture with precision.',
  },
  {
    number: '05',
    title: 'Quality & Delivery',
    description: 'Each product undergoes final inspection before secure delivery to your site.',
  },
  {
    number: '06',
    title: 'Impact Tracking',
    description: 'We document the plastic reused and share reports, so you see your impact.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our process turns potential waste into tangible value, step by step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-500 transform hover:-translate-y-2"
            >
              <div className="flex items-start mb-6">
                <div className="text-6xl font-bold text-emerald-600 leading-none mr-4">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}