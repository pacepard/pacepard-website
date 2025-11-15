'use client'

import { Smile, Wrench, Trophy } from 'lucide-react'
import PersonaCard from '../containers/persona-card'
import { motion } from 'framer-motion'

const personas = [
  {
    id: 'learners',
    title: 'Learners',
    image: '/blocks/learners.svg',
    description: 'Dive into Kaggle courses, competitions & forums.',
    bgColor: 'from-blue-400 to-blue-200',
    features: [
      { icon: Smile, label: 'Beginner competitions' },
      { icon: Wrench, label: 'Practical courses' },
      { icon: Trophy, label: 'Public datasets' },
    ],
  },
  {
    id: 'developers',
    title: 'Developers',
    description: "Leverage Kaggle's models, notebooks & datasets.",
    image: '/blocks/learners.svg',
    bgColor: 'from-yellow-400 to-yellow-200',
    features: [
      { icon: Wrench, label: 'Open-sourced models' },
      { icon: Wrench, label: 'Competition solution write-ups' },
      { icon: Wrench, label: 'Public notebooks' },
    ],
  },
  {
    id: 'researchers',
    title: 'Researchers',
    description: 'Advance ML with our pre-trained model hub & competitions.',
    image: '/blocks/learners.svg',
    bgColor: 'from-blue-300 to-cyan-200',
    features: [
      { icon: Trophy, label: 'ML competition hosting' },
      { icon: Wrench, label: 'Model training datasets' },
      { icon: Trophy, label: 'Open-sourced models' },
    ],
  },
  {
    id: 'learner', // Note: Duplicate ID, changed to avoid React warnings if this were production
    title: 'New Learners',
    image: '/blocks/learners.svg',
    description: 'Explore new paths with beginner-friendly guides.',
    bgColor: 'from-blue-400 to-blue-200',
    features: [
      { icon: Smile, label: 'Beginner competitions' },
      { icon: Wrench, label: 'Practical courses' },
      { icon: Trophy, label: 'Public datasets' },
    ],
  },
  {
    id: 'developer-pro',
    title: 'Senior Developers',
    description: "Contribute to open-source model development.",
    image: '/blocks/learners.svg',
    bgColor: 'from-yellow-400 to-yellow-200',
    features: [
      { icon: Wrench, label: 'Open-sourced models' },
      { icon: Wrench, label: 'Competition solution write-ups' },
      { icon: Wrench, label: 'Public notebooks' },
    ],
  },
  {
    id: 'researcher-lead',
    title: 'Research Leads',
    description: 'Publish and cite cutting-edge ML research.',
    image: '/blocks/learners.svg',
    bgColor: 'from-blue-300 to-cyan-200',
    features: [
      { icon: Trophy, label: 'ML competition hosting' },
      { icon: Wrench, label: 'Model training datasets' },
      { icon: Trophy, label: 'Open-sourced models' },
    ],
  },
]

// Animation variants for the title
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

// Animation variants for the card containers (staggered fade-in-up)
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15, // Staggered delay
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

export function PersonasShowcase() {
  return (
    // Adjusted horizontal padding for small screens
    <section className="py-16 px-4 sm:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-gray-900 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          Who&apos;s on Pacepard?
        </motion.h1>

        {/* --- RESPONSIVENESS APPLIED HERE --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {personas.map((persona, idx) => (
            <motion.div
              key={persona.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={idx} // Pass index as a custom prop for staggered delay
              variants={cardVariants as any}
            >
              <PersonaCard {...persona} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}