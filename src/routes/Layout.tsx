import { useState } from "react";

import { Outlet } from "react-router";
import { useTranslation } from "react-i18next";

import ResponsiveTopBar from "@/components/nav/ResponsiveTopBar";
import TopBarNavLink from "@/components/nav/TopBarNavLink";

import Brand from "@/partials/branding/Brand";

import { cn } from "@/utilities/cn";

export default function RootLayout() {
	const { t } = useTranslation();

	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<>
			<ResponsiveTopBar
				isOpen={isOpen}
				onClick={toggleOpen}
				brand={<Brand />}>
				<TopBarNavLink to="/settings" onClick={toggleOpen}>
					<span className={cn("icon")}>settings</span>
					<span>{t("navigation.settings")}</span>
				</TopBarNavLink>
			</ResponsiveTopBar>


			<Outlet />
		</>
	)
}