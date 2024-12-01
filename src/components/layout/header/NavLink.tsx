import Link from "next/link";
import { ReactNode } from "react";

type NavLinkProps = {

    active: boolean,
    href: string,
    target?: "_blank" | "_parent" | "_top",
    icon: ReactNode,
    text: string
};

export function NavLink({active, href, target, icon, text}: NavLinkProps) {

    return(

        <Link href={href} target={target ?? "_self"} className={`${active ? "text-theme" : ""} flex items-center gap-1 p-2 rounded-lg text-text transition-smooth hover:bg-details`}>
            <div>

                {icon}
            </div>

            <p className="text-nowrap">{text}</p>
        </Link>

    );
};
