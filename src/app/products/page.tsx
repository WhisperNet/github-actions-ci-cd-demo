'use client';

import { useState } from 'react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'Design Tools' },
  ];

  const products = [
    {
      id: 1,
      name: 'NextJS Starter Kit',
      category: 'web',
      price: '$49',
      image: '/product1.jpg',
      description:
        'Complete starter kit for Next.js applications with auth, database, and deployment ready.',
      features: [
        'Authentication',
        'Database Setup',
        'Responsive Design',
        'TypeScript',
      ],
    },
    {
      id: 2,
      name: 'React Mobile App',
      category: 'mobile',
      price: '$79',
      image: '/product2.jpg',
      description:
        'Cross-platform mobile app built with React Native and modern UI components.',
      features: [
        'Cross Platform',
        'Push Notifications',
        'Offline Support',
        'Native Performance',
      ],
    },
    {
      id: 3,
      name: 'UI Component Library',
      category: 'design',
      price: '$99',
      image: '/product3.jpg',
      description:
        'Comprehensive UI component library with 100+ customizable components.',
      features: [
        '100+ Components',
        'Dark Mode',
        'Customizable',
        'Documentation',
      ],
    },
    {
      id: 4,
      name: 'E-commerce Platform',
      category: 'web',
      price: '$149',
      image: '/product4.jpg',
      description:
        'Full-featured e-commerce platform with payment integration and admin panel.',
      features: [
        'Payment Gateway',
        'Admin Panel',
        'Inventory Management',
        'Analytics',
      ],
    },
    {
      id: 5,
      name: 'Design System',
      category: 'design',
      price: '$69',
      image: '/product5.jpg',
      description:
        'Complete design system with tokens, components, and guidelines.',
      features: [
        'Design Tokens',
        'Figma Library',
        'Style Guide',
        'Brand Guidelines',
      ],
    },
    {
      id: 6,
      name: 'API Gateway',
      category: 'web',
      price: '$89',
      image: '/product6.jpg',
      description:
        'Scalable API gateway with authentication, rate limiting, and monitoring.',
      features: [
        'Rate Limiting',
        'Authentication',
        'Monitoring',
        'Documentation',
      ],
    },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of digital products designed to accelerate your
              development process
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                {product.name.charAt(0)}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Buy Now
                  </button>
                  <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already using our products to
            build amazing applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View All Products
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
