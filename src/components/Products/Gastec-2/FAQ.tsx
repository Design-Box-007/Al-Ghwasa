import React from 'react';
import FAQAccordion from '@/components/Comman/FAQAccordion';
import { FAQItem } from '@/types';

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "How do I choose the right hydration system?",
      answer: "Choosing the right hydration system depends on several factors including your space requirements, water quality needs, and usage patterns. Our team can assess your specific needs and recommend the most suitable system for your environment. We consider factors like water source, daily consumption, space constraints, and budget to provide you with the optimal solution."
    },
    {
      question: "Do you provide on-site setup and support?",
      answer: "Yes, we provide comprehensive on-site setup and ongoing support for all our hydration systems. Our expert technicians will install your system, conduct thorough testing, and provide training for your staff. We also offer maintenance services and 24/7 technical support to ensure your system operates at peak performance."
    },
    {
      question: "What brands do you work with?",
      answer: "We partner with leading manufacturers in the hydration industry to provide you with the highest quality systems. Our portfolio includes trusted brands known for reliability, innovation, and superior performance. We carefully select our partners to ensure we can offer you the best solutions for your specific needs."
    },
    {
      question: "Can I get a custom system for my space?",
      answer: "Absolutely! We specialize in designing custom hydration solutions tailored to your specific space and requirements. Whether you need a compact system for a small office or a large-scale solution for a commercial facility, our engineering team can create a custom design that perfectly fits your space and meets your unique needs."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <FAQAccordion faqs={faqs} />
    </section>
  );
};

export default FAQ;
