import "./WishItem.css";

const WishItem = ({ name, wishes, setWishes, index, completed, prio }) => {
    // console.log({ name, wishes, setWishes, index, completed, prio });

    const handleDeleteWish = () => {
        const newWishes = [...wishes];
        newWishes.splice(index, 1);
        setWishes(newWishes);
    };

    const handleCompleted = () => {
        const updatedWishes = [...wishes];
        updatedWishes[index].completed = !updatedWishes[index].completed;
        setWishes(updatedWishes);
    };

    return (
        <>
            <div className="single-wish">
                <input
                    type="checkbox"
                    name="checkup"
                    checked={completed}
                    onChange={handleCompleted}
                />
                <li
                    style={{
                        textDecoration: completed ? "line-through" : "none",
                        color: completed ? "lightgrey" : "black",
                        backgroundColor:
                            prio === "high"
                                ? "#F96464"
                                : prio === "low"
                                ? "lightgreen"
                                : null,
                    }}
                >
                    {name}
                </li>
                <button onClick={handleDeleteWish}>Delete</button>
            </div>
        </>
    );
};

export default WishItem;
