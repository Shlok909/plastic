import { Recycle, Leaf, Users, Package } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Recycle,
    title: 'Plastic Collection',
    description: 'Efficient collection systems for plastic waste from homes and businesses across communities.',
  },
  {
    icon: Leaf,
    title: 'Recycling Solutions',
    description: 'Advanced recycling processes that transform waste into high-quality, sustainable products.',
  },
  {
    icon: Users,
    title: 'Sustainability Consulting',
    description: 'Expert guidance to help organizations implement effective plastic waste management strategies.',
  },
  {
    icon: Package,
    title: 'Eco-friendly Products',
    description: 'Durable, sustainable products made from recycled plastic for everyday use.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission & Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At The Plastic Project, we're committed to tackling plastic pollution through innovative recycling solutions.
            Our comprehensive approach ensures that plastic waste becomes a resource, not a problem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-500 rounded-xl transform hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
