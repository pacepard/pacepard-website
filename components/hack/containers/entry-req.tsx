import { GitCompare, GitFork, GitMerge, GitPullRequest } from "lucide-react"

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline"

const items = [
  {
    id: 1,
    date: "15 minutes ago",
    title: "Forked Repository",
    description:
      "Forked the repository to create a new branch for development.",
    icon: GitFork,
  },
  {
    id: 2,
    date: "10 minutes ago",
    title: "Pull Request Submitted",
    description:
      "Submitted PR #342 with new feature implementation. Waiting for code review from team leads.",
    icon: GitPullRequest,
  },
  {
    id: 3,
    date: "5 minutes ago",
    title: "Comparing Branches",
    description:
      "Received comments on PR. Minor adjustments needed in error handling and documentation.",
    icon: GitCompare,
  },
  {
    id: 4,
    title: "Merged Branch",
    description:
      "Merged the feature branch into the main branch. Ready for deployment.",
    icon: GitMerge,
  },
]

export default function EntryRequirements() {
  return (
    <Timeline defaultValue={3}>
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=vertical]/timeline:ms-10"
        >
          <TimelineHeader>
            <TimelineSeparator className="!bg-brand group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
            <TimelineTitle className="mt-0.5">{item.title}</TimelineTitle>
            <TimelineIndicator className="flex size-6 items-center justify-center border-none !bg-brand group-data-completed/timeline-item:bg-brand group-data-completed/timeline-item:text-brand group-data-[orientation=vertical]/timeline:-left-7">
              <item.icon size={14} className="text-black" />
            </TimelineIndicator>
          </TimelineHeader>
          <TimelineDate className="mt-2 mb-0">{item.date}</TimelineDate>
          <TimelineContent>
            {item.description}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
