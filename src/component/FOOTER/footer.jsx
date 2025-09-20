export const Footer = () => {
  const FooterItems = [
    "Daily services",
    "Assembly service",
    "Custom service",
    "Contact us",
    "Near me",
    "Careers",
    "Gift us",
    "About us",
  ];
  return (
    <footer className="footer" id="about">
      <ul>
        {FooterItems.map((items, index) => (
          <li key={index}>
            <a href="#">{items}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
