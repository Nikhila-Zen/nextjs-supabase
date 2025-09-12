export default function ProjectListLoading() {
    return(
        <>
            <ul>
               {Array(5).fill(0).map((_el, index) => (
                <li key={index}></li>
               ))} 
            </ul>
        </>
    )
}