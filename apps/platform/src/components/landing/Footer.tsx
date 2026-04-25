export function Footer() {
	return (
		<footer className="bg-gray-900 text-white px-10 py-10 mt-10">
			<div className="flex flex-row justify-center gap-32 items-start w-full mb-8">
				<div className="text-3xl font-bold text-white">
					<span>🌱 </span>Ihsanify
				</div>
				<div className="flex flex-col gap-2 text-sm text-gray-400">
					<a
						href="https://www.instagram.com/ilmin_naafi/"
						className="hover:text-white"
					>
						About
					</a>
					<a
						href="https://www.instagram.com/ilmin_naafi/"
						className="hover:text-white"
					>
						Contact
					</a>
					<a
						href="https://www.instagram.com/ilmin_naafi/"
						className="hover:text-white"
					>
						Privacy Policy
					</a>
				</div>
			</div>
			<div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
				© 2026 Ihsanify. All rights reserved.
			</div>
		</footer>
	);
}
