import { FaChevronRight } from "react-icons/fa";

const Link_Pages = () => {
  const breadcrumbs = [
    { name: "Products", href: "/products" },
    { name: "Stationery", href: "/products/stationery" },
    { name: "Business Card", href: "/products/stationery/business-card" },
  ];

  return (
    <nav className="flex items-center space-x-2 text-gray-500 text-sm">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={index} className="flex items-center">
          <a
            href={breadcrumb.href}
            className={index < 2 ? "text-[14px] text-[#0F172A] font-[400]" : "text-[14px] text-[#475569] font-[400]"}
          >
            {breadcrumb.name}
          </a>
          {index < breadcrumbs.length - 1 && (
            <FaChevronRight className="mx-2 text-gray-400" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Link_Pages;
