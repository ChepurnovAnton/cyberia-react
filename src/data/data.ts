interface INavigation {
  pathName: string;
  title: string;
}

export const navigations: INavigation[] = [
  { pathName: "/agency", title: "Агенство" },
  { pathName: "/services", title: "Услуги" },
  { pathName: "/cases", title: "Кейсы" },
  { pathName: "/blog", title: "Блог" },
  { pathName: "/contacts", title: "Контакты" },
];