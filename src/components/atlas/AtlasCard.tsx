
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useGeoContext } from '@/context/GeoContext';
import { cn } from '@/lib/utils';

interface AtlasCardProps {
  className?: string;
  children?: React.ReactNode;
}

interface AtlasCardHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

interface AtlasCardTitleProps {
  className?: string;
  children?: React.ReactNode;
}

interface AtlasCardDescriptionProps {
  className?: string;
  children?: React.ReactNode;
}

interface AtlasCardContentProps {
  className?: string;
  children?: React.ReactNode;
}

interface AtlasCardFooterProps {
  className?: string;
  children?: React.ReactNode;
}

const AtlasCard = React.forwardRef<HTMLDivElement, AtlasCardProps>(
  ({ className, children, ...props }, ref) => {
    const { currentRegion } = useGeoContext();
    
    // Apply region-specific styling
    const regionSpecificClasses = () => {
      switch (currentRegion.id) {
        case 'east-asia':
          return 'border-2 shadow-sm';
        case 'south-asia':
          return 'border-[3px] shadow-md';
        case 'africa':
          return 'border-2 shadow-md rounded-xl';
        case 'latin-america':
          return 'border-2 shadow-lg';
        default:
          return 'border shadow';
      }
    };

    return (
      <Card
        ref={ref}
        className={cn(
          'bg-atlas-surface',
          regionSpecificClasses(),
          className
        )}
        {...props}
      >
        {children}
      </Card>
    );
  }
);

AtlasCard.displayName = 'AtlasCard';

const AtlasCardHeader = React.forwardRef<HTMLDivElement, AtlasCardHeaderProps>(
  ({ className, ...props }, ref) => {
    return <CardHeader ref={ref} className={cn('', className)} {...props} />;
  }
);

AtlasCardHeader.displayName = 'AtlasCardHeader';

const AtlasCardTitle = React.forwardRef<HTMLParagraphElement, AtlasCardTitleProps>(
  ({ className, ...props }, ref) => {
    const { currentRegion } = useGeoContext();
    
    // Region-specific title styling
    const regionSpecificClasses = () => {
      switch (currentRegion.id) {
        case 'east-asia':
          return 'text-xl font-medium';
        case 'south-asia':
          return 'text-2xl font-semibold';
        case 'africa':
          return 'text-xl font-bold tracking-wide';
        default:
          return 'text-xl font-semibold';
      }
    };

    return (
      <CardTitle
        ref={ref}
        className={cn(
          regionSpecificClasses(),
          'text-atlas-primary',
          className
        )}
        {...props}
      />
    );
  }
);

AtlasCardTitle.displayName = 'AtlasCardTitle';

const AtlasCardDescription = React.forwardRef<HTMLParagraphElement, AtlasCardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <CardDescription
        ref={ref}
        className={cn('text-atlas-muted', className)}
        {...props}
      />
    );
  }
);

AtlasCardDescription.displayName = 'AtlasCardDescription';

const AtlasCardContent = React.forwardRef<HTMLDivElement, AtlasCardContentProps>(
  ({ className, ...props }, ref) => {
    return <CardContent ref={ref} className={cn('', className)} {...props} />;
  }
);

AtlasCardContent.displayName = 'AtlasCardContent';

const AtlasCardFooter = React.forwardRef<HTMLDivElement, AtlasCardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <CardFooter
        ref={ref}
        className={cn('border-t border-atlas-secondary/50 pt-3', className)}
        {...props}
      />
    );
  }
);

AtlasCardFooter.displayName = 'AtlasCardFooter';

export {
  AtlasCard,
  AtlasCardHeader,
  AtlasCardTitle,
  AtlasCardDescription,
  AtlasCardContent,
  AtlasCardFooter,
};
