import { IconName } from "lucide-react/dynamic";

export type VenueItem = {
  id: string;
  icon: IconName;
  label: string;
  sublabel: string;
  description: string;
};

export const venueItems: VenueItem[] = [
  {
    id: "venue",
    label: "Venue",
    sublabel: "Location",
    description: "The physical location of the hackathon.",
    icon: "map-pin",
  },
  {
    id: "date",
    label: "Date & Time",
    sublabel: "Schedule",
    description: "Event starts on November 2nd, 2025, 9:00 AM.",
    icon: "calendar",
  },
  
  {
    id: "time",
    label: "Date & Time",
    sublabel: "Schedule",
    description: "Event starts on November 2nd, 2025, 9:00 AM.",
    icon: "calendar",
  },
];
