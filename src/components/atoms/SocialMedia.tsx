import Link from "next/link";
import { SocialLinks } from "@/constant/data";

const SocialMedia = () => {
  return (
    <ul className="flex justify-center space-x-8 p-2 border border-solid-1 border-GreenColor rounded-lg shadow-lg ">
      {SocialLinks.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <li key={index} className="text-2xl">
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
            >
              <IconComponent className="text-GreenColor" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMedia;
