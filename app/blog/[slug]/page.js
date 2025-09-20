import { notFound } from "next/navigation";
import { Metadata } from "next";
import { title } from "process";
import { getPost } from "@/lib/posts";

export async function generateMetadata({params, searchParams}, parent){
    try{
        const {frontmatter} = await getPost(params.slug)
        return frontmatter
    } catch(e){ }
    return{
        title: title,
        description
    }
}

export default async function Blogpage({ params }) {

    // if (!['first', 'second'].includes(params.slug)) {
    //     notFound()
    // }
    let post
    try{
        post = await getPost(params.slug)
    } catch(e){
        notFound()
    }

    return (<div>
    <article className="prose dark:prose-invert">
        {post.content}
    </article>
    </div>
    );
}