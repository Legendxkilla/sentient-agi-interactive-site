// SentientAGIFlow.jsx
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Model Creation',
    icon: '/icons/model-creation.svg', // Replace with your actual path or logo
    analogy: 'You placing an order'
  },
  {
    title: 'Tokenization as Artifact',
    icon: '/icons/tokenization.svg',
    analogy: 'MasterChef cooking it up'
  },
  {
    title: 'Decentralized Storage',
    icon: '/icons/storage.svg',
    analogy: 'Waiter confirming it’s your dish'
  },
  {
    title: 'Permissionless Access',
    icon: '/icons/access.svg',
    analogy: 'Open menu to all guests'
  },
  {
    title: 'On-chain Usage Tracking',
    icon: '/icons/usage.svg',
    analogy: 'Kitchen logs everything (no free fries)'
  },
  {
    title: 'Royalties to Contributors',
    icon: '/icons/royalties.svg',
    analogy: 'You get rewarded like a Michelin Chef'
  },
];

export default function SentientAGIFlow() {
  return (
    <div className="min-h-screen bg-white text-black px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">How Sentient AGI Works</h1>
      <div className="flex flex-col gap-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={step.icon}
              alt={step.title}
              className="w-20 h-20 object-contain"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold">{step.title}</h2>
              <p className="text-gray-600 italic">Analogy: {step.analogy}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
