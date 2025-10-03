import { Button } from '@/components/ui/button'
import { ChevronRight, Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap, LucideIcon } from 'lucide-react'
import { FEATURES_HEADER, FEATURES_GRID } from "@/_data/pacepard/features"; 

// 1. Create a map to link string keys from the data file to the actual Lucide components
const ICON_MAP: Record<string, LucideIcon> = {
    Zap,
    Cpu,
    Fingerprint,
    Pencil,
    Settings2,
    Sparkles,
};

export default function Features() {
    const header = FEATURES_HEADER;
    const grid = FEATURES_GRID;

    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 md:space-y-16">

                {/* Header Section (uses FEATURES_HEADER) */}
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">{header.title}</h2>
                    <div className="space-y-6">
                        <p>{header.description}</p>
                    
                        <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="gap-1 pr-1.5"
                        >
                            {/* Using standard <a> tag instead of Link to avoid compilation error */}
                            <a href={header.button.href}>
                                <span>{header.button.text}</span>
                                <ChevronRight className="size-2" />
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Features Grid (maps over FEATURES_GRID) */}
                <div className="relative mx-auto grid max-w-5xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    {grid.map((feature) => {
                        const IconComponent = ICON_MAP[feature.iconKey];
                        if (!IconComponent) return null;

                        return (
                            <div key={feature.title} className="space-y-3">
                                <div className="flex items-center gap-2">
                                    {/* Render the icon component */}
                                    <IconComponent className="size-4" />
                                    <h3 className="text-sm font-medium">{feature.title}</h3>
                                </div>
                                <p className="text-sm">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
