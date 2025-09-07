import { navItems } from "@/lib/constants";
import Link from "next/link";

export default function Navbar() {
    return <nav>
        <div>
            {navItems.map((item) => (
                <Link key={item.name} href={item.href}></Link>))
            }
        </div>
    </nav>;

}