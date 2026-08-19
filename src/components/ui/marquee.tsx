import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
    trackClassName?: string;
}

export function Marquee({
    className,
    reverse = false,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    trackClassName,
    ...props
}: MarqueeProps) {
    return (
        <div
            {...props}
            className={cn(
                'group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]',
                {
                    'flex-row': !vertical,
                    'flex-col': vertical,
                },
                className,
            )}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            'flex shrink-0 justify-start',
                            trackClassName ?? '[gap:var(--gap)]',
                            {
                                'animate-marquee flex-row': !vertical,
                                'animate-marquee-vertical flex-col': vertical,
                                'group-hover:[animation-play-state:paused]':
                                    pauseOnHover,
                                '[animation-direction:reverse]': reverse,
                            },
                        )}
                        style={
                            vertical
                                ? {
                                      animation:
                                          'marquee-vertical var(--duration, 40s) linear infinite',
                                      ...(reverse && {
                                          animationDirection: 'reverse',
                                      }),
                                  }
                                : {
                                      animation:
                                          'marquee var(--duration, 40s) infinite linear',
                                      ...(reverse && {
                                          animationDirection: 'reverse',
                                      }),
                                  }
                        }
                    >
                        {children}
                    </div>
                ))}
        </div>
    );
}
