import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import clsx from "clsx";
function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();
  const pathname = useLocation();
  // TODO how can the order be defined for mobile?
  // Should we allow providing a different list of items?
  const items = useNavbarItems();
  return (
    <ul className="menu__list">
      <li className="menu__list-item">
        <Link
          className={clsx(
            "menu__link ",
            pathname.pathname == "/" && "bg-[var(--ifm-color-primary)]"
          )}
          aria-current="page"
          to="/">
          <div className="flex flex-col items-center">
            <svg
              style={{
                marginRight: "0.5rem",
              }}
              viewBox="0 0 24 24"
              class="breadcrumbHomeIcon_YNFT breadcrumbHomeIcon_node_modules-@docusaurus-theme-classic-lib-theme-DocBreadcrumbs-Items-Home-styles-module">
              <path
                d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
                fill="currentColor"></path>
            </svg>
          </div>
          Home
        </Link>
      </li>
      {items.map((item, i) => (
        <NavbarItem
          mobile
          {...item}
          label={item.label == "Docs" ? "Paid Scripts" : item.label}
          onClick={() => mobileSidebar.toggle()}
          key={i}
        />
      ))}
    </ul>
  );
}
