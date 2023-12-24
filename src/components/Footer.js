import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Footer() {
	const { name, email, website, phone, bankAccount, bankName } =
		useContext(State);

	return (
		<>
			<footer className="footer border-t-2 border-gray-300 pt-5">
				<ul className="flex flex-wrap items-center justify-center">
					<li className="m-1 my-2">
						<span className="font-bold">Your name:</span> {name}
					</li>
					<li className="m-1 my-2">
						<span className="font-bold">Your email:</span> {email}
					</li>
					<li className="m-1 my-2">
						<span className="font-bold">Phone number:</span> {phone}
					</li>
					<li className="m-1 my-2">
						<span className="font-bold">Bank:</span> {bankName}
					</li>
					<li className="m-1 my-2">
						<span className="font-bold">Account holder:</span> {name}
					</li>
					<li className="m-1 my-2">
						<span className="font-bold">Account number:</span> {bankAccount}
					</li>
					<li className="m-1 my-2">
						<span className="font-bold">Website:</span>{" "}
						<a href={website} target="_blank" rel="noopenner noreferrer">
							{website}
						</a>
					</li>
				</ul>
			</footer>
		</>
	);
}
