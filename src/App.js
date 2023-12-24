import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./pages";
import Invoice from "./components/App";
import { Error } from "./pages";

export default function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Invoice />}></Route>
				<Route path="*" element={<Error />}></Route>
			</Routes>
		</BrowserRouter>
	);
}
