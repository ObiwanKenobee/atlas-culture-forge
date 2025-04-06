
import React from 'react';
import { Button } from '@/components/ui/button';
import { useGeoContext } from '@/context/GeoContext';
import { cn } from '@/lib/utils';

interface AtlasButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'cultural';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const AtlasButton = React.forwardRef<HTMLButtonElement, AtlasButtonProps>(
  ({ className, variant = 'cultural', size = 'default', ...props }, ref) => {
    const { currentRegion } = useGeoContext();
    
    // Cultural variant uses adaptive colors based on region
    const culturalClass = variant === 'cultural' 
      ? 'bg-atlas-primary text-white hover:bg-atlas-primary/90' 
      : '';
    
    // Different regions might have different button styles
    const regionSpecificClasses = () => {
      switch (currentRegion.id) {
        case 'east-asia':
          return 'font-medium';
        case 'south-asia':
          return 'font-semibold';
        case 'africa':
          return 'font-bold tracking-wide';
        default:
          return '';
      }
    };

    return (
      <Button
        ref={ref}
        className={cn(
          culturalClass,
          regionSpecificClasses(),
          className
        )}
        variant={variant === 'cultural' ? 'default' : variant}
        size={size}
        {...props}
      />
    );
  }
);

AtlasButton.displayName = 'AtlasButton';

export { AtlasButton };
