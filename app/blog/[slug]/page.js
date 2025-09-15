import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata = {
  title: "Blog",
};

export default function Blogpage({ params }) {

    if (!['first', 'second'].includes(params.slug)) {
        notFound()
    }
    return (
    <div>
        Hello {params.slug}
        </div>
    );
}