import React, { useState } from "react";

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
  const [isListOpen, setIsListOpen] = useState(false);

  const maxHeight = isListOpen ? "h-auto" : "h-0";

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };
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
              className="breadcrumbHomeIcon_YNFT breadcrumbHomeIcon_node_modules-@docusaurus-theme-classic-lib-theme-DocBreadcrumbs-Items-Home-styles-module">
              <path
                d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
                fill="currentColor"></path>
            </svg>
          </div>
          Home
        </Link>
      </li>
      {items.map(
        (item, i) =>
          item.label !== "Docs" && (
            <NavbarItem
              mobile
              {...item}
              label={item.label}
              onClick={() => mobileSidebar.toggle()}
              key={i}
            />
          )
      )}

      {/* custom */}
      <li
        className={clsx(
          isListOpen
            ? "theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item"
            : "theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item menu__list-item--collapsed"
        )}>
        <div onClick={toggleList} className="menu__list-item-collapsible">
          <a
            className={clsx(
              "menu__link menu__link--sublist menu__link--sublist-caret",
              isListOpen ? "cst-after-link" : "cst-after-link-not"
            )}
            aria-expanded={isListOpen ? "true" : "false"}>
            Paid Scripts
          </a>
        </div>
        <ul
          className={clsx(
            "menu__link list-none cst-list",
            isListOpen && "list-open"
          )}>
          <li className="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item">
            <a
              className="menu__link"
              tabindex="-1"
              href="/docs/Paid Scripts/Unijob">
              Unijob
            </a>
          </li>
          <li className="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item">
            <a
              className="menu__link"
              tabindex="-1"
              href="/docs/Paid Scripts/Drugs">
              Drugs
            </a>
          </li>
          <li className="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item">
            <a
              className="menu__link"
              tabindex="-1"
              href="/docs/Paid Scripts/Duty">
              Duty
            </a>
          </li>
          <li className="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item">
            <a
              className="menu__link"
              tabindex="-1"
              href="/docs/Paid Scripts/Robbery">
              Robbery
            </a>
          </li>
          <li className="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item">
            <a
              className="menu__link"
              tabindex="-1"
              href="/docs/Paid Scripts/Anticheat">
              Anticheat
            </a>
          </li>
          <li className="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item">
            <a
              className="menu__link"
              tabindex="-1"
              href="/docs/Paid Scripts/Showrooms">
              Showrooms
            </a>
          </li>
          <li className="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item">
            <a
              className="menu__link"
              tabindex="-1"
              href="/docs/Paid Scripts/Motels">
              Motels
            </a>
          </li>
        </ul>
      </li>

      <li
        className={clsx(
          isListOpen
            ? "theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item"
            : "theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item menu__list-item--collapsed"
        )}>
        <div onClick={toggleList} className="menu__list-item-collapsible">
          <a
            className={clsx(
              "menu__link menu__link--sublist menu__link--sublist-caret",
              isListOpen ? "cst-after-link" : "cst-after-link-not"
            )}
            aria-expanded={isListOpen ? "true" : "false"}>
            Snippets/Tutorials
          </a>
        </div>
        <ul
          className={clsx(
            "menu__link list-none cst-list",
            isListOpen && "list-open"
          )}>
          <li className="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item">
            <a
              className="menu__link"
              tabindex="-1"
              href="/docs/Snippets/Distance Optimisation">
              Distance Optimisation
            </a>
          </li>
          <li className="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item">
            <a
              className="menu__link"
              tabindex="-1"
              href="/docs/Snippets/ESX Shared Object Problem">
              ESX Shared Object Problem
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}