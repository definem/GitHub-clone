import Link from "next/link";
import Overview from "@a/icons/overview.svg";
import Repositories from "@a/icons/repos.svg";
import Projects from "@a/icons/projects.svg";
import Packages from "@a/icons/packages.svg";
import Stars from "@a/icons/stars.svg";

const NavBottom = () => {
    return (
        <div className="flex mb-4 gap-[26px]">
            <div></div>
            <div>
                <nav className="items-center flex gap-x-8">
                    <ul className="flex gap-x-8 items-center">
                        <li className="flex items-center gap-[8px]">
                            <img src={Overview.src} alt="Overview icon" />
                            <Link href="/">Overview</Link>
                        </li>
                        <li className="flex items-center gap-[8px]">
                            <img src={Repositories.src} alt="Repositories icon" />
                            <Link href="/repositories">Repositories</Link>
                        </li>
                        <li className="flex items-center gap-[8px]">
                            <img src={Projects.src} alt="Projects icon" />
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li className="flex items-center gap-[8px]">
                            <img src={Packages.src} alt="Packages icon" />
                            <Link href="/packages">Packages</Link>
                        </li>
                        <li className="flex items-center gap-[8px]">
                            <img src={Stars.src} alt="Stars icon" />
                            <Link href="/stars">Stars</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBottom;
