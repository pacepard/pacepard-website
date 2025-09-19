import Link from "next/link"
import { ComponentPropsWithoutRef } from "react"

export interface ILogo extends Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> {
  large?: boolean
  className?: string
}