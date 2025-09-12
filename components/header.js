import Counter from "@/components/counter";
import Link from "next/link";
export default function Header() {
    return (
        <header>
            I am header!
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/about/projects">Projects</Link>
            {/* <Counter /> */}
        </header>
    );
}