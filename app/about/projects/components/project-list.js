import Card from "@/components/Card";

export default async function ProjectList(){
    const response = await fetch('http://localhost:3001/repos');
    const repos = await response.json();
    return(
        <>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
               {repos.map(repo => (
                <li key={repo.id} className="mb-3">
                    <Card className="font-mono h-full">
                        <div className="flex justify-between mb-2">
                            <div className="font-bold">{repo.title}</div>
                            <div>🌟{repo.stargazers_count}</div>
                        </div>
                        <div>{repo.description}</div>
                    </Card>
                </li>
               ))} 
            </ul>
        </>
    );
}