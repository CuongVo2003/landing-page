import { LucideIcon } from 'lucide-react';

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function TrustBadge({ icon: Icon, title, description }: TrustBadgeProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <Icon className="w-16 h-16 text-[#4CAF50]" strokeWidth={1.5} />
      </div>
      <h3 className="text-[#2C2416] font-bold text-lg mb-2">
        {title}
      </h3>
      <p className="text-[#666666] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
