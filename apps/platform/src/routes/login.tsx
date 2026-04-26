import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
	component: LoginPage,
});

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		if (!email || !password) {
			setError("Email and password is required.");
			return;
		}
		setIsLoading(true);
		setError("");
		try {
			const res = await fetch("http://localhost:8000/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});
			const data = await res.json();
			if (!res.ok) {
				setError(data.message);
				return;
			}
			console.log(data);
		} catch {
			setError("Something went wrong. Please try again.");
		} finally {
			setIsLoading(false);
		}
	}
	return (
		<section className="flex items-center justify-center mx-auto w-full max-w-sm p-8 min-h-screen">
			<form
				onSubmit={handleSubmit}
				className="max-w-md flex flex-col gap-10 bg-gray-100 p-15 rounded-2xl"
			>
				<div className="flex items-center justify-center">
					<h2 className="text-3xl font-bold">Login</h2>
				</div>
				<div className="flex flex-col gap-5">
					<input
						className="text-center border border-gray-300 rounded-lg px-3 py-2 w-full"
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className="text-center border border-gray-300 rounded-lg px-3 py-2 w-full"
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{error && <p className="border text-red-500">{error}</p>}
				</div>
				<div className="flex flex-col items-center justify-center">
					<button
						type="submit"
						disabled={isLoading}
						className="cursor-pointer bg-green-700 text-white font-bold w-full px-15 py-2 flex justify-center rounded-3xl"
					>
						{isLoading ? "Logging In..." : "Submit"}
					</button>
				</div>
			</form>
		</section>
	);
}
