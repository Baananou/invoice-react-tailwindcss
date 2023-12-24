import React, { useContext } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "./DeleteModal";
import { State } from "../context/stateContext";

export default function TableForm() {
	const {
		description,
		setDescription,
		quantity,
		setQuantity,
		price,
		setPrice,
		amount,
		list,
		total,
		isEditing,
		showModal,
		setShowModal,
		handleSubmit,
		editRow,
	} = useContext(State);

	return (
		<>
			<ToastContainer position="top-right" theme="colored" />

			<form onSubmit={handleSubmit}>
				<div className="flex flex-col md:mt-16">
					<label
						className="mb-1 text-base font-semibold text-gray-700"
						htmlFor="description">
						Item description
					</label>
					<input
						className="bg-white p-1 rounded-md mb-2 text-gray-600 border-2 border-opacity-30 border-blue-500 focus:border-blue-900 outline-none"
						type="text"
						name="description"
						id="description"
						placeholder="Item description"
						maxLength={96}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<div className="md:grid grid-cols-3 gap-10">
					<div className="flex flex-col">
						<label
							className="mb-1 text-base font-semibold text-gray-700"
							htmlFor="quantity">
							Quantity
						</label>
						<input
							className="bg-white p-1 rounded-md mb-2 text-gray-600 border-2 border-opacity-30 border-blue-500 focus:border-blue-900 outline-none"
							type="text"
							name="quantity"
							id="quantity"
							placeholder="Quantity"
							maxLength={33}
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
						/>
					</div>

					<div className="flex flex-col">
						<label
							className="mb-1 text-base font-semibold text-gray-700"
							htmlFor="price">
							Price
						</label>
						<input
							className="bg-white p-1 rounded-md mb-2 text-gray-600 border-2 border-opacity-30 border-blue-500 focus:border-blue-900 outline-none"
							type="text"
							name="price"
							id="price"
							placeholder="Price"
							maxLength={33}
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>

					<div className="flex flex-col">
						<label
							className="mb-1 text-base font-semibold text-gray-700"
							htmlFor="amount">
							Amount
						</label>
						<p>{amount}</p>
					</div>
				</div>
				<button
					type="submit"
					className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
					{isEditing ? "Finish Editing" : "Add Table Item"}
				</button>
			</form>

			{/* Table items */}

			<table width="100%" className="mb-10 overflow-auto">
				<thead>
					<tr className="bg-gray-100 p-1">
						<td className="font-bold">Description</td>
						<td className="font-bold">Quantity</td>
						<td className="font-bold">Price</td>
						<td className="font-bold">Amount</td>
					</tr>
				</thead>
				{list.map(({ id, description, quantity, price, amount }) => (
					<React.Fragment key={id}>
						<tbody>
							<tr className="h-10">
								<td>{description}</td>
								<td>{quantity}</td>
								<td>{price}</td>
								<td className="amount">{amount}</td>
								<td>
									<button onClick={() => editRow(id)}>
										<AiOutlineEdit className="text-green-500 font-bold text-xl" />
									</button>
								</td>
								<td>
									<button onClick={() => setShowModal(true)}>
										<AiOutlineDelete className="text-red-500 font-bold text-xl" />
									</button>
								</td>
							</tr>
						</tbody>
						{showModal && <DeleteModal id={id} />}
					</React.Fragment>
				))}
			</table>

			<div>
				<h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
					Total: {total.toLocaleString()}.DT
				</h2>
			</div>
		</>
	);
}
