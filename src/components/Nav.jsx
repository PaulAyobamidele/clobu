import { useState } from 'react';
import { Form, NavLink } from "react-router-dom";
import { TrashIcon } from '@heroicons/react/24/solid';
import logomark from "../assets/logomark.svg";

const Nav = ({ userName }) => {
  // State to manage the selected value of each dropdown
  const [selectedValues, setSelectedValues] = useState({
    aboutUs: '',
    solutions: '',
    pricing: '',
    blog: ''
  });

  // Handler function to update selected value for each dropdown
  const handleDropdownChange = (event, name) => {
    setSelectedValues({
      ...selectedValues,
      [name]: event.target.value
    });
  };

  return (
    <nav>
      <NavLink
        to="/"
        aria-label="Go to home"
      >
        <img src={logomark} alt="" height={30} />
        <span>FINVERSE</span>
      </NavLink>
      <ul className="nav-links">
        <li>
          <select value={selectedValues.aboutUs} onChange={(e) => handleDropdownChange(e, 'aboutUs')}>
            <option value="">About Us</option>
          </select>
        </li>
        <li>
          <select value={selectedValues.solutions} onChange={(e) => handleDropdownChange(e, 'solutions')}>
            <option value="">Solutions</option>
            {/* Add more options as needed */}
          </select>
        </li>
        <li>
          <select value={selectedValues.pricing} onChange={(e) => handleDropdownChange(e, 'pricing')}>
            <option value="">Pricing</option>
            {/* Add more options as needed */}
          </select>
        </li>
        <li>
          <select value={selectedValues.blog} onChange={(e) => handleDropdownChange(e, 'blog')}>
            <option value="">Blog</option>
            {/* Add more options as needed */}
          </select>
        </li>
      </ul>
      {
        userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("Delete user and all data?")) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit" className="btn btn--warning">
              <span>Delete User</span>
              <TrashIcon width={20} />
            </button>

          </Form>
        )
      }
    </nav>
  )
}

export default Nav;
