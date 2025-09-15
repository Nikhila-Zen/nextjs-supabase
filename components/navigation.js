import Link from "next/link";
import styles from "@/app/globals.css";

export default function Navigation() {
    return (
        <nav className="font-mono">
        <div>
        <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/about/projects">Projects</Link></li>
            <li><Link href="/photos">Photos</Link></li>
            {/* <Counter /> */}
        </ul>
        </div>
        </nav>
    );
}