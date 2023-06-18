import dynamic from "next/dynamic";
import Footer from "./Footer";
import Header from "./Header";
import "./globals.css";
const CursorProvider = dynamic(() => import("@/HOC/cursor"), {
	ssr: false,
});
export const metadata = {
	title: "Defined Solution | Digital Agency",
	description:
		"At Defined Solution, We attract & retain quality customers with a custom designed website, that does not break the bank.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-background h-full text-white">
				<CursorProvider />
				<div className="relative">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
