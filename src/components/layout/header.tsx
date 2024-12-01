import Image from "next/image";
import Link from "next/link";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import { NavLink } from "./header/NavLink";
import { Github, SquareTerminal, Handshake, PersonStanding, Menu } from 'lucide-react';
import Logo from "../../assets/img/Logo/Logo.png";

export function Header() {

    return (

        <header className="flex items-center justify-between gap-12 max-w-full w-screenWidth h-[50px] px-5">

            <section className="flex items-center gap-3">

                <Link href="/">

                    <Image src={Logo} alt="Arthur" draggable="false" loading="lazy" />

                </Link> {/* Logo */}

                <nav className="flex items-center xl:hidden">

                    <NavLink active={false} href="/aboutMe" icon={<PersonStanding size={20} />} text="Sobre mim" />

                    <NavLink active={false} href="/projects" icon={<SquareTerminal size={20} />} text="Projetos" />

                    <NavLink active={false} href="/experiences" icon={<Handshake size={20} />} text="Experiências" />

                </nav> {/* Links */}

            </section> {/* Logo e links de navegacao */}

            <section className="flex items-center gap-3">

                <nav>

                    <NavLink active={false} href="https://github.com/ArthurDeAraujoNeves3" target="_blank" icon={<Github size={20} />} text="Github" />
                    
                </nav> {/* Github */}

                <article className="hidden xl:block">

                    <MenuRoot>
                        <MenuTrigger asChild className="bg-details rounded-lg">
                            <div className="p-2 text-text transition-smooth cursor-pointer hover:brightness-90">
                                <Menu size={20} />
                            </div>
                        </MenuTrigger> {/* Botao de ativacao */}

                        <MenuContent className="bg-details rounded-lg p-2">

                            <MenuItem value="aboutMe" className="p-2 rounded-md hover:bg-theme">
                                <NavLink active={false} href="/aboutMe" icon={<PersonStanding size={20} />} text="Sobre mim" />
                            </MenuItem>

                            <MenuItem value="projects" className="p-2 rounded-md hover:bg-theme">
                                <NavLink active={false} href="/projects" icon={<SquareTerminal size={20} />} text="Projetos" />
                            </MenuItem>

                            <MenuItem value="experiences" className="p-2 rounded-md hover:bg-theme">
                                <NavLink active={false} href="/experiences" icon={<Handshake size={20} />} text="Experiências" />
                            </MenuItem>

                        </MenuContent>
                    </MenuRoot>

                </article> {/* Menu com links de navagacao */}

            </section> {/* Github */}

        </header>

    );
};
