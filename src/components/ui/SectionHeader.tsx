'use client';

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function SectionHeader({ title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col items-center gap-3 sm:gap-6 text-center px-4 sm:px-6 mb-12 sm:mb-16 ${className}`}>
      <h2 className="font-gotham font-black text-[#075985] dark:text-sky-300 text-heading-lg uppercase tracking-tighter">
        {title}
      </h2>
      <p className="font-gotham font-medium text-stone-800 dark:text-stone-300 text-body-md lg:text-body-lg max-w-3xl leading-relaxed">
        {description}
      </p>
    </div>
  );
}