import ProjectList from "@/app/about/projects/components/project-list";
import { Suspense } from "react";
import ProjectListLoading from "@/app/about/projects/components/project-list-loading";
import { ErrorBoundary } from "react-error-boundary";

export default async function ProjectsPage() {
    const response = await fetch('http://localhost:3001/repos', {cache: "no-store"});
    const repos = await response.json();
    return (
        <>
            <h1>Projects</h1>
            <ErrorBoundary fallback={<div>Failed to load projects.</div>}>
            <Suspense fallback={<ProjectListLoading />}>
                <ProjectList />
            </Suspense>
            </ErrorBoundary>
        </>
    );
}