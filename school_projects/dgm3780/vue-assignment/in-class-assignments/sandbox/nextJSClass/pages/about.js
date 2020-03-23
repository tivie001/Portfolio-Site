import Link from "next/link";

export default function Index() {
    return (
        <div>
            <Link href="/index">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <p>Hey this is the about page!</p>
        </div>
    )
}