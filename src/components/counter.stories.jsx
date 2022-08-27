import Counter from "./counter";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
  title: "Example/Counter",
  component: Counter,
};

const counter1 = { id: 1, value: 12, liked: true };
const counter2 = { id: 2, value: 12, liked: false };
const counter3 = { id: 3, value: 0, liked: true };

export const Counter1 = () => <Counter counter={counter1} />;
export const Counter2 = () => <Counter counter={counter2} />;
export const Counter3 = () => <Counter counter={counter3} />;
