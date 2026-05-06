import { useState } from "react";
import { MdOutlineArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsMenu = [
  {
    title: "Administration",
    icon: <FaBuildingColumns />,
    links: [
      { label: "Admission Automation", href: "/products/admission" },
      { label: "Fee Management", href: "/products/fees" },
      { label: "Human Resource Management", href: "/products/hr" },
      { label: "Asset Management", href: "/products/assets" },
      { label: "Infrastructure & Venue Booking", href: "/products/assets" },
      { label: "Hostel Management", href: "/products/hostel" },
      { label: "Mess/Canteen Automation", href: "/products/hostel" },
      { label: "Placement & Internship", href: "/products/hostel" },
      { label: "Parent Access", href: "/products/hostel" },
      { label: "Procurement Management", href: "/products/hostel" },
    ],
  },
  {
    title: "Learning",
    icon: <FaBuildingColumns />,
    links: [
      { label: "Learning Pathways", href: "/products/lms" },
      { label: "Choice-Based Course Registration", href: "/products/exams" },
      { label: "Time Table Management", href: "/products/attendance" },
      { label: "Smart Attendance Management", href: "/products/attendance" },
      { label: "Learning Management System", href: "/products/attendance" },
      { label: "Faculty Feedback", href: "/products/attendance" },
      { label: "Outcome Based Education", href: "/products/attendance" },
      { label: "Examination Management System", href: "/products/attendance" },
      { label: "phD Management", href: "/products/attendance" },
    ],
  },
  {
    title: "Campus Experience",
    icon: <FaBuildingColumns />,
    links: [
      { label: "Clubs, Chapters & Societies", href: "/products/lms" },
      { label: "Campus Commerce", href: "/products/exams" },
      { label: "1000+ Dynamic Workflows Automation", href: "/products/attendance" },
      { label: "Campus Communication Automation", href: "/products/attendance" },
      { label: "Student E-portfolio", href: "/products/attendance" },
      { label: "Survey Management", href: "/products/attendance" },
    ],
  },
  {
    title:"Integrations",
    icon: <FaBuildingColumns />,
    links: [
      {label:"Admission CRM", href:"/products/crm"},
      {label:"Payment Gateways", href:"/products/payment"},
      {label:"Loan Providers", href:"/products/loan"},
      {label:"Accounting", href:"/products/Account"},
      {label:"Plagiarism Solutions", href:"/products/solutions"},
      {label:"Video Confrencing", href:"/products/video"},
      {label:"Hardware", href:"/products/hardware"},
      {label:"Single Sign On", href:"/products"},
      {label:"Libary Management", href:"/products/library"},
      {label:"Communication Solutions", href:"/products/communications"}
    ]
  }
];

  return (
    <nav className="w-full bg-white shadow-sm font-Digii">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <img src="/Logo.png" alt="Logo" className="w-24" />

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 font-semibold">
          {/* Products */}
          <li className="relative group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-red-600 hover:border-b-[2px]">
              Products
              <MdOutlineArrowDropDown className="group-hover:rotate-180 transition" />
            </div>

          <div className="absolute left-0 top-full mt-6 hidden group-hover:flex bg-white ms-[-150px] shadow-lg rounded-md p-4 gap-2">
  {productsMenu.map((section) => (
    <ul key={section.title} className="w-64 text-sm">
      <li className="text-red-600 font-semibold text-lg flex items-center gap-2 mb-3">
        {section.icon}
        {section.title}
      </li>

      {section.links.map((link) => (
        <li className="hover:text-red-500" key={link.label}>
          <a
            href={link.href}
            className="block py-2 px-2 rounded hover:bg-gray-100"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  ))}
</div>
  </li>

          <li className="hover:text-red-600 cursor-pointer font-lato">
            <div className="">
            Solutions
            </div>
            </li>
          <li className="hover:text-red-600 cursor-pointer">Clientele</li>
          <li className="hover:text-red-600 cursor-pointer">Blog</li>
          <li className="hover:text-red-600 cursor-pointer">New initiatives</li>
          <li className="hover:text-red-600 cursor-pointer">Company</li>
        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:block px-6 py-2 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition hover:cursor-pointer">
          Request a Demo
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <MdMenu size={28} />
        </button>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed inset-0 z-50 transition ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute left-0 top-0 h-full w-80 bg-white p-6 transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <img src="/Logo.png" className="w-20" />
            <MdClose
              size={26}
              className="cursor-pointer"
              onClick={() => setMobileOpen(false)}
            />
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-4 font-semibold">
            {/* Products Dropdown */}
            <li>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex justify-between w-full items-center"
              >
                Products
                <MdOutlineArrowDropDown
                  className={`transition ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {productsOpen && (
                <ul className="mt-3 pl-4 text-sm space-y-2">
                  <li>Admission Automation</li>
                  <li>Fee Management</li>
                  <li>HR Management</li>
                  <li>Hostel Management</li>
                </ul>
              )}
            </li>

            <li>Solutions</li>
            <li>Clientele</li>
            <li>Blog</li>
            <li>New initiatives</li>
            <li>Company</li>

            <button className="mt-6 px-6 py-2 rounded-full bg-red-500 text-white hover:cursor-pointer">
              Request a Demo
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;