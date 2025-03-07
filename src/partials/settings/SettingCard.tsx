import { type ReactNode } from "react";

import Div from "@/lib/components/div";

import { cn } from "@/utilities/cn";

export interface SettingCardProps {
	children?: ReactNode;
	className?: string;
}

export default function SettingCard({ children, className }: SettingCardProps) {
	return (
		<Div className={cn("flex flex-col px-4 py-6 gap-2 bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all ease-in-out duration-150", className)}>
			{children}
		</Div>
	);
}