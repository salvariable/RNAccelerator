import { useState, useEffect } from 'react';

export default function TodoList() {
    const [itemList, setItemList] = useState([]);
    const [newItem, setNewItem] = useState("")

    useEffect(() => {
        setItemList([
            'Pick up fresh groceries at Walmart',
            'Mow the lawn and repot the plants',
            'Buy tickets for Barbenheimer',
        ])
    }, []);

    useEffect(() => {
        console.log("Reloading item list...");

        return () => console.log("Item list reloaded!");
    }, [itemList])

    return (
        <div>
            <h1>Todo List with {itemList && itemList.length} items</h1>
            {itemList.map(element => <ul>- {element}</ul>)}
            <input onChange={({ target }) => setNewItem(target.value)} />
            <button onClick={() => setItemList([...itemList, newItem])}>Add to list</button>
        </div>
    )
} 