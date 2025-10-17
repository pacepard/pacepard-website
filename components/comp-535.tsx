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

export default function Component() {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="mb-4">
          <div className="font-medium">{item.title}</div>
          <div className="text-sm text-muted-foreground">{item.description}</div>
          {item.date && (
            <div className="text-xs mt-2">{item.date}</div>
          )}
        </div>
      ))}
    </div>
  )
}
