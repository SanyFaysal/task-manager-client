// Inside your React component file

import React from "react";
import { Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <Space size="large">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500 transition duration-300"
        >
          <FacebookOutlined />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500 transition duration-300"
        >
          <TwitterOutlined />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500 transition duration-300"
        >
          <LinkedinOutlined />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500 transition duration-300"
        >
          <InstagramOutlined />
        </a>
        {/* Add more social icons from Ant Design as needed */}
      </Space>
      <p className="mt-4">
        &copy; 2024 Your Task Management Website. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
