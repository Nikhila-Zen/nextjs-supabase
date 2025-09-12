import ProjectList from "@/components/project-list";
import { Suspense } from "react";
import ProjectListLoading from "@/components/project-list-loading";

export default async function ProjectsPage() {
    const response = await fetch('http://localhost:3001/repos', {next: {cache: "no-store"}});
    const repos = await response.json();
    return (
        <>
            <h1>Projects</h1>
            <Suspense fallback={<ProjectListLoading />}>
                <ProjectList />
            </Suspense>
        </>
    );
}