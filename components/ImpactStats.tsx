'use client';

import { useEffect, useState, useRef } from 'react';
import { Recycle, Home, Trees } from 'lucide-react';

const stats = [
  {
    icon: Recycle,
    value: 200,
    suffix: '+',
    label: 'kg Plastic Diverted',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
  },
  {
    icon: Home,
    value: 50,
    suffix: '+',
    label: 'Products Delivered',
    color: 'text-sky-600',
    bgColor: 'bg-sky-100',
  },
  {
    icon: Trees,
    value: 5,
    suffix: '',
    label: 'Waste-Collection Networks',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: Trees,
    value: 0.2,
    suffix: '',
    label: 'Tons CO₂ Saved (Est.)',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={counterRef} className="text-4xl sm:text-5xl font-bold">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function ImpactStats() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-emerald-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Every product contributes to a cleaner planet and stronger communities.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300 rounded-xl transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.bgColor} ${stat.color} mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="mb-2">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>

                  <p className="text-sm sm:text-base text-gray-200 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}