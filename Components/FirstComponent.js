import { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../pages/index";

const FirstComponent = () => {
	const [myTime, setMyTime] = useState("");
	const myVal = useContext(MyContext);
	const myTimeFunction = () => {
		const myDate = new Date().toLocaleString();
		setMyTime(myDate);
	};

	setInterval(myTimeFunction, 1000);

	return (
		<div className="first-component-wrapper">
			<p className="first-component-text">
				This is the First Component, showing date
			</p>
			<p className="date">
				Date is: {myTime}
				{myVal}
			</p>

			<style jsx>{`
				.first-component-text {
					color: white;
				}
				.date {
					color: white;
				}
			`}</style>
		</div>
	);
};

export default FirstComponent;
