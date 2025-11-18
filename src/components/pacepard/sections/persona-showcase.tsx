'use client'

import { motion, Variants } from 'framer-motion'
import { Smile, Wrench, Trophy } from 'lucide-react'

import PersonaCard from '../containers/persona-card'

const personas = [
  {
    id: 'product-teams',
    title: 'Product Teams',
    image: '/blocks/learners.svg',
    description: 'A software engineer, product manager, product designer etc. working side-by-side on user and product problems.',
    bgColor: 'from-blue-400 to-blue-200',
    features: [
      { icon: Smile, label: 'Beginner competitions' },
      { icon: Wrench, label: 'Practical courses' },
      { icon: Trophy, label: 'Public datasets' },
    ],
  },
  {
    id: 'engineers',
    title: 'Engineers',
    description: "AI engineers, software engineers, DevOps specialists, and full-stack developers building mastery and workplace-ready skills  as they contribute to live projects.",
    image: '/blocks/learners.svg',
    bgColor: 'from-yellow-400 to-yellow-200',
    features: [
      { icon: Wrench, label: 'Open-sourced models' },
      { icon: Wrench, label: 'Competition solution write-ups' },
      { icon: Wrench, label: 'Public notebooks' },
    ],
  },
  {
    id: 'product-design-folks',
    title: 'Product & Design folks',
    description: 'Product managers, UX/UI designers, UX Researcher, UX Writers, product marketers etc. shaping experiences and solving real user needs.',
    image: '/blocks/learners.svg',
    bgColor: 'from-blue-300 to-cyan-200',
    features: [
      { icon: Trophy, label: 'ML competition hosting' },
      { icon: Wrench, label: 'Model training datasets' },
      { icon: Trophy, label: 'Open-sourced models' },
    ],
  },
  {
    id: 'learners', // Note: Duplicate ID, changed to avoid React warnings if this were production
    title: 'Learners',
    image: '/blocks/learners.svg',
    description: 'Individuals passionate about technology, eager to grow job-ready skills, build habits, and confidence to thrive in today’s workplace.',
    bgColor: 'from-blue-400 to-blue-200',
    features: [
      { icon: Smile, label: 'Beginner competitions' },
      { icon: Wrench, label: 'Practical courses' },
      { icon: Trophy, label: 'Public datasets' },
    ],
  },
  {
    id: 'data-ai-professionals',
    title: 'Data & AI Professionals',
    description: "Data scientists, analysts, machine learning engineers, and AI researchers leveraging Pacepard to build AI/ML products.",
    image: '/blocks/learners.svg',
    bgColor: 'from-yellow-400 to-yellow-200',
    features: [
      { icon: Wrench, label: 'Open-sourced models' },
      { icon: Wrench, label: 'Competition solution write-ups' },
      { icon: Wrench, label: 'Public notebooks' },
    ],
  },
  {
    id: 'life-long-learners',
    title: 'Other Life-long learners',
    description: 'Academic and industry researchers, innovators, and makers exploring solutions, validating ideas, and contributing to projects that create real-world impact.',
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
const cardVariants: Variants = {
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
              variants={cardVariants}
            >
              <PersonaCard {...persona} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}