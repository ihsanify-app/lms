import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/Assignments")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/dashboard/Assignments"!</div>;
}
