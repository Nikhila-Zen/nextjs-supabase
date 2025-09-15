export default function AboutLayout({children}){
    // throw new Error('oops')
    return(
        <>
            <div>{children}</div>
            <div className="mt-4">
                <h2 className="mb-4 text-xl">You may also like</h2>
                <ul>
                    <li>First blog post</li>
                    <li>Second blog post</li>
                </ul>
            </div>
        </>
    )
}