import { useId } from "react";
import { Label } from "@/components/ui/label";
import { DynamicIcon } from "lucide-react/dynamic";
import { venueItems } from "@/_data/hack/venue-data";

export default function VenueDateTime() {
  const baseId = useId();

  return (
    <div className="flex flex-col gap-10">
      {venueItems.map((item) => {
        const id = `${baseId}-${item.id}`;

        return (
          <div key={item.id} className="items-start justify-start">
            <div className="relative flex-1 w-full items-start gap-2 rounded-md border border-brand p-4 shadow-xs outline-none hover:border-brand/50 transition-all">
              <div className="flex grow items-center px-2 gap-2">
                <div className="flex size-6">
                  <DynamicIcon
                    name={item.icon}
                    className="size-4 mx-auto mt-1"
                  />
                </div>

                <div className="grid gap-1 text-left">
                  <Label htmlFor={id}>
                    {item.label}{" "}
                    <span className="text-xs font-normal text-muted-foreground">
                      ({item.sublabel})
                    </span>
                  </Label>
                  <p
                    id={`${id}-description`}
                    className="text-xs text-muted-foreground"
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
