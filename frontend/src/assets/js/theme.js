import { createTheme } from "flowbite-react";

export const customTheme = createTheme({
  navbar: {
    link: {
      base: "block py-2 pl-3 pr-4 md:p-0",
      active: {
        on: "bg-brand-primary text-brand-background md:bg-transparent md:text-brand-primary",
        off: "border-b border-brand-light text-brand-dark hover:bg-brand-light md:border-0 md:hover:bg-transparent md:hover:text-brand-primary",
      },
    },
    bordered: {
      on: "border",
      off: ""
    },
  },
});
