export const Menu = () => {
  const menuItems = [
    {
      link: "#articles",
      name: "Article",
    },
    {
      link: "#why",
      name: "Why Housesale",
    },
    {
      link: "#phon",
      name: "Book professionals",
    },
    {
      link: "#houses",
      name: "Houses",
    },
    {
      link: "#more-call",
      name: "More collection",
    },
    {
      link: "#about",
      name: "About us",
    },
  ];
  return (
    <ul>
      {menuItems.map((items, index) => (
        <li key={index}>
          <a href={items.link}>{items.name}</a>
        </li>
      ))}
    </ul>
  );
};
