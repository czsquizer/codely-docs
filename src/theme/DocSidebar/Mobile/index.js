import React from "react";
import clsx from "clsx";
import {
  NavbarSecondaryMenuFiller,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import DocSidebarItems from "@theme/DocSidebarItems";
import Link from "@docusaurus/Link";
// eslint-disable-next-line react/function-component-definition
const DocSidebarMobileSecondaryMenu = ({ sidebar, path }) => {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, "menu__list")}>
      <Link class="menu__link py-3" aria-current="page" to="/">
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
        Home
      </Link>
      <DocSidebarItems
        items={sidebar}
        activePath={path}
        onItemClick={(item) => {
          // Mobile sidebar should only be closed if the category has a link
          if (item.type === "category" && item.href) {
            mobileSidebar.toggle();
          }
          if (item.type === "link") {
            mobileSidebar.toggle();
          }
        }}
        level={1}
      />
    </ul>
  );
};
function DocSidebarMobile(props) {
  return (
    <NavbarSecondaryMenuFiller
      component={DocSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}
export default React.memo(DocSidebarMobile);
