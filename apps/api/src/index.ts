import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { meRouter } from "../auth/me";
import { authRouter } from "../auth/register";

const app = new Hono();
console.log("Environment Variable TEST:", process.env.TEST);

app
	.get("/", (c) => {
		return c.text("Hello Hono!");
	})
	.route("/", authRouter)
	.route("/", meRouter);

serve(
	{
		fetch: app.fetch,
		port: 8000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);
