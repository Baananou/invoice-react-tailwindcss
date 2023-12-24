import { useContext } from "react";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Footer from "./Footer";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import Table from "./Table";
import TableForm from "./TableForm";
import ReactToPrint from "react-to-print";
import { State } from "../context/stateContext";

function App() {
	const {
		name,
		setName,
		address,
		setAddress,
		email,
		setEmail,
		phone,
		setPhone,
		bankName,
		setBankName,
		bankAccount,
		setBankAccount,
		website,
		setWebsite,
		clientName,
		setClientName,
		clientAddress,
		setClientAddress,
		invoiceNumber,
		setInvoiceNumber,
		invoiceDate,
		setInvoiceDate,
		dueDate,
		setDueDate,
		notes,
		setNotes,
		componentRef,
	} = useContext(State);

	return (
		<>
			<main
				className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start"
				style={{
					maxWidth: "1920px",
					margin: "auto",
				}}>
				<section>
					<div className="bg-white p-5 rounded shadow">
						<div className="flex flex-col justify-center">
							<article className="md:grid grid-cols-2 gap-10">
								<div className="flex flex-col">
									<label
										className="mb-1 text-base font-semibold text-gray-700"
										htmlFor="name">
										Your full name
									</label>
									<input
										className="bg-white p-1 rounded-md mb-2 text-gray-600 border-2 border-opacity-30 border-blue-500 focus:border-blue-900 outline-none"
										type="text"
										name="text"
										id="name"
										placeholder="Enter your name"
										maxLength={56}
										autoComplete="off"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>

								<div className="flex flex-col">
									<label
										className="mb-1 text-base font-semibold text-gray-700"
										htmlFor="address">
										Enter your address
									</label>
									<input
										className="bg-white p-1 rounded-md mb-2 text-gray-600 border-2 border-opacity-30 border-blue-500 focus:border-blue-900 outline-none"
										type="text"
										name="address"
										id="address"
										placeholder="Enter your address"
										autoComplete="off"
										maxLength={96}
										value={address}
										onChange={(e) => setAddress(e.target.value)}
									/>
								</div>
							</article>

							<article className="md:grid grid-cols-3 gap-10">
								<div className="flex flex-col">
									<label
										className="mb-1 text-base font-semibold text-gray-700"
										htmlFor="email">
										Enter your email
									</label>
									<input
										className="bg-white p-1 rounded-md mb-2 text-gray-600 border-2 border-opacity-30 border-blue-500 focus:border-blue-900 outline-none"
										type="email"
										name="email"
										id="email"
										placeholder="Enter your email"
										maxLength={255}
										autoComplete="off"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>

								<div className="flex flex-col">
									<label
										className="mb-1 text-base font-semibold text-gray-700"
										htmlFor="website">
										Enter your website
									</label>
									<input
										className="bg-white p-1 rounded-md mb-2 text-gray-600 border-2 border-opacity-30 border-blue-500 focus:border-blue-900 outline-none"
										type="url"
										name="website"
										id="website"
										placeholder="Enter your website"
										maxLength={96}
										autoComplete="off"
										value={website}
										onChange={(e) => setWebsite(e.target.value)}
									/>
								</div>

								<div className="flex flex-col">
									<label
										className="mb-1 text-base font-semibold text-gray-700"
										htmlFor="phone">
										Enter your phone
									</label>
									<input
										className="bg-white p-1 rounded-md mb-2 text-gray-600 border-2 border-opacity-30 border-blue-500 focus:border-blue-900 outline-none"
										type="text"
										name="phone"
										id="phone"
										placeholder="Enter your phone"
										maxLength={12}
										autoComplete="off"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
									/>
								</div>
							</article>

							<article className="md:grid grid-cols-2 gap-10">
								<div className="flex flex-col">
									<label
										className="mb-1 text-base font-semibold text-gray-700"
										htmlFor="bankName">
										Enter your bank name
									</label>
									<input
										className="bg-white p-1 rounded-md mb-2 text-gray-600 border-2 border-opacity-30 border-blue-500 focus:border-blue-900 outline-none"
										type="text"
										name="bankName"
										id="bankName"
										placeholder="Enter your bank name"
										maxLength={56}
										autoComplete="off"
										value={bankName}
										onChange={(e) => setBankName(e.target.value)}
									/>
								</div>

								<div className="flex flex-col">
									<label
										className="mb-1 text-base font-semibold text-gray-700"
										htmlFor="bankAccount">
										Enter your bank account number
									</label>
									<input
										className="bg-white p-1 rounded-md mb-2 text-gray-600 border-2 border-opacity-30 border-blue-500 focus:border-blue-900 outline-none"
										type="text"
										name="bankAccount"
										id="bankAccount"
										placeholder="Enter your bank account number"
										maxLength={20}
										autoComplete="off"
										value={bankAccount}
										onChange={(e) => setBankAccount(e.target.value)}
									/>
								</div>
							</article>

							<article className="md:grid grid-cols-2 gap-10 md:mt-16">
								<div className="flex flex-col">
									<label
										className="mb-1 text-base font-semibold text-gray-700"
										htmlFor="clientName">
										Enter your client's name
									</label>
									<input
										className="bg-white p-1 rounded-md mb-2 text-gray-600 border-2 border-opacity-30 border-blue-500 focus:border-blue-900 outline-none"
										type="text"
										name="clientName"
										id="clientName"
										placeholder="Enter your client's name"
										maxLength={56}
										autoComplete="off"
										value={clientName}
										onChange={(e) => setClientName(e.target.value)}
									/>
								</div>

								<div className="flex flex-col">
									<label
										className="mb-1 text-base font-semibold text-gray-700"
										htmlFor="clientAddress">
										Enter your client's address
									</label>
									<input
										className="bg-white p-1 rounded-md mb-2 text-gray-600 border-2 border-opacity-30 border-blue-500 focus:border-blue-900 outline-none"
										type="text"
										name="clientAddress"
										id="clientAddress"
										placeholder="Enter your client's address"
										maxLength={96}
										autoComplete="off"
										value={clientAddress}
										onChange={(e) => setClientAddress(e.target.value)}
									/>
								</div>
							</article>

							<article className="md:grid grid-cols-3 gap-10">
								<div className="flex flex-col">
									<label
										className="mb-1 text-base font-semibold text-gray-700"
										htmlFor="invoiceNumber">
										Invoice Number
									</label>
									<input
										className="bg-white p-1 rounded-md mb-2 text-gray-600 border-2 border-opacity-30 border-blue-500 focus:border-blue-900 outline-none"
										type="text"
										name="invoiceNumber"
										id="invoiceNumber"
										placeholder="Invoice Number"
										autoComplete="off"
										value={invoiceNumber}
										onChange={(e) => setInvoiceNumber(e.target.value)}
									/>
								</div>

								<div className="flex flex-col">
									<label
										className="mb-1 text-base font-semibold text-gray-700"
										htmlFor="invoiceDate">
										Invoice Date
									</label>
									<input
										className="bg-white p-1 rounded-md mb-2 text-gray-600 border-2 border-opacity-30 border-blue-500 focus:border-blue-900 outline-none"
										type="date"
										name="invoiceDate"
										id="invoiceDate"
										placeholder="Invoice Date"
										autoComplete="off"
										value={invoiceDate}
										onChange={(e) => setInvoiceDate(e.target.value)}
									/>
								</div>

								<div className="flex flex-col">
									<label
										className="mb-1 text-base font-semibold text-gray-700"
										htmlFor="dueDate">
										Due Date
									</label>
									<input
										className="bg-white p-1 rounded-md mb-2 text-gray-600 border-2 border-opacity-30 border-blue-500 focus:border-blue-900 outline-none"
										type="date"
										name="dueDate"
										id="dueDate"
										placeholder="Invoice Date"
										autoComplete="off"
										value={dueDate}
										onChange={(e) => setDueDate(e.target.value)}
									/>
								</div>
							</article>

							{/* This is our table form */}
							<article>
								<TableForm />
							</article>

							<label
								className="mb-1 text-base font-semibold text-gray-700"
								htmlFor="notes">
								Additional Notes
							</label>
							<textarea
								name="notes"
								id="notes"
								cols="30"
								rows="10"
								placeholder="Additional notes to the client"
								maxLength={500}
								value={notes}
								onChange={(e) => setNotes(e.target.value)}></textarea>
						</div>
					</div>
				</section>

				{/* Invoice Preview */}
				<div className="transform scale-75 sticky top-0 right-0 mt-[-6rem] mb-2rem bg-white p-5 rounded-2xl border-4 border-blue-200">
					<ReactToPrint
						trigger={() => (
							<button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
								Print / Download
							</button>
						)}
						content={() => componentRef.current}
					/>
					<div ref={componentRef} className="p-5">
						<Header />

						<MainDetails />

						<ClientDetails />

						<Dates />

						<Table />

						<Notes />

						<Footer />
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
