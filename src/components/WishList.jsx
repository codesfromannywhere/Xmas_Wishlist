import WishItem from "./WishItem";
import { useState, useEffect } from "react";
import "./WishList.css";

const wishList = () => {
    const [wishes, setWishes] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [prioValue, setPrioValue] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handlePrioChange = (e) => {
        setPrioValue(e.target.value);
    };

    // const handleSubmit = (e) => {
    //     // console.log(e);
    //     e.preventDefault();

    //     setWishes([
    //         ...wishes,
    //         { name: inputValue, completed: false, prio: prioValue },
    //     ]);

    //     setInputValue("");
    //     setPrioValue("");
    // };

    const handleSubmit = (e) => {
        // console.log(e);

        e.preventDefault();

        if (inputValue === "") {
            // console.error(error);
            setError("Drop a wish to fill it with holiday magic! 🙃");
        } else {
            setWishes([
                ...wishes,

                { name: inputValue, completed: false, prio: prioValue },
            ]);

            setInputValue("");
            setPrioValue("");
            setError("");
        }
    };
    // console.log(wishes);

    return (
        <section>
            <h2>Add a wish to your list</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        required
                        placeholder={"Type in your wish..."}
                    />
                    <select value={prioValue} onChange={handlePrioChange}>
                        <option value="">Select Priority</option>
                        <option value="high">High</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <input type="button" value="Add wish" onClick={handleSubmit} />
                {error === error ? (
                    <p className="error-message">{error}</p>
                ) : null}
            </form>
            <article className="all-wishes">
                {wishes.length > 0 ? (
                    <ul>
                        {wishes.map((elt, index) => (
                            <WishItem
                                wishes={wishes}
                                setWishes={setWishes}
                                key={index}
                                index={index}
                                name={elt.name}
                                completed={elt.completed}
                                prio={elt.prio}
                            />
                        ))}
                    </ul>
                ) : (
                    <p>Santa's inbox is empty!</p>
                )}
            </article>
        </section>
    );
};

export default wishList;
