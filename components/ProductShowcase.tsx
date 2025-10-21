'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Tetra-Bench',
    image: '/images/products/tetra bench.png',
    description: 'This eco-friendly park bench pairs modern style with sustainable strength. Made from recycled plastic and repurposed Tetra Pak cartons, it\'s durable, weather-resistant, and comfortable, making it perfect for parks, gardens, schools, and green campuses.',
    specifications: [
      { label: 'Seating capacity', value: '3 person' },
      { label: 'Back Rest', value: '17 inches' },
      { label: 'Dimensions', value: '60×19×35 in' },
      { label: 'Plastic beams', value: '8 nos' },
      { label: 'Sitting height', value: '17 inches' },
      { label: 'Bench Weight', value: '41 kg' },
      { label: 'Sitting Area', value: '16 inches' },
      { label: 'Plastic quantity', value: '41 kg' },
    ],
    price: 'Only 6999 Rs',
    imagePosition: 'left',
  },
  {
    id: 2,
    name: 'Plastic-Q Chair',
    image: '/images/products/plastic Q.png',
    description: 'A modern chair that combines ergonomic design with robust, upcycled materials. Its vibrant look and professional finish make it suitable for cafes, offices, and contemporary homes.',
    specifications: [
      { label: 'Seating capacity', value: '1 person' },
      { label: 'Base material', value: 'MS Pipe' },
      { label: 'Dimensions', value: '21×24×36 in' },
      { label: 'Plastic beams', value: '12 nos' },
      { label: 'Sitting height', value: '17 inches' },
      { label: 'Chair Weight', value: '25 kg' },
      { label: 'Sitting Area', value: '16×21 in' },
      { label: 'Plastic quantity', value: '15 kg' },
    ],
    tagline: 'Modern • Warm • Inviting • Professional',
    price: 'Only 4999 Rs',
    imagePosition: 'right',
  },
  {
    id: 3,
    name: 'Eco Planter Pots',
    image: '/images/products/planter pots..png',
    description: 'Crafted from 100% recycled plastic, this planter helps cut down on landfill waste while offering a stylish and lasting home for your plants. With its strong build, smooth finish, and adaptable design, it\'s an ideal choice for homes, offices, balconies, and garden spaces.',
    specifications: [
      { label: 'Dimensions', value: '15×210×195 mm' },
      { label: 'Plastic quantity', value: '1.5 kg' },
      { label: 'Pot Weight', value: '1.5 kg' },
    ],
    price: 'Only 349 Rs',
    imagePosition: 'left',
  },
];

export default function ProductShowcase() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
            Our Product Showcase
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            A detailed look at our sustainable creations. Each product is crafted with precision, durability, and the planet in mind.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {products.map((product) => (
            <div
              key={product.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                product.imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div
                className={`${
                  product.imagePosition === 'right' ? 'lg:col-start-2' : ''
                }`}
              >
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-gray-100 to-gray-50">
                  <div className="relative w-full aspect-square sm:aspect-video lg:aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                      priority={product.id === 1}
                    />
                  </div>
                </div>
              </div>

              <div
                className={`${
                  product.imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {product.name}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  {product.description}
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
                    {product.specifications.map((spec, idx) => (
                      <div key={idx} className="text-xs sm:text-sm">
                        <span className="font-bold text-gray-900">{spec.label}:</span>
                        <span className="text-gray-700 ml-1">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {product.tagline && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-300 text-center">
                      <p className="text-gray-600 text-xs sm:text-sm font-medium">{product.tagline}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 order-2 sm:order-1">
                    {product.price}
                  </div>
                  <Button
                    onClick={scrollToContact}
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 sm:px-8 py-4 sm:py-3 text-sm sm:text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 order-1 sm:order-2"
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
