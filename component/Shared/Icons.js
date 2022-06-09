import Link from "next/link";
import { BsGithub, BsInstagram } from "react-icons/bs";

export default function IconsComponent({ component }) {
  return (
    <div className={`icons ${component}-icons`}>
      <Link href="https://www.instagram.com/frontend_web_coder/?hl=sr">
        <a target="_blank">
          <BsInstagram />
        </a>
      </Link>
      <Link href="https://github.com/zarkogolocorbin">
        <a target="_blank">
          <BsGithub />
        </a>
      </Link>
    </div>
  );
}
