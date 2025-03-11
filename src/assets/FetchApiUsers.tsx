import { useState } from "react";
import { IUser } from "../intarface/IUser";

export default function FetchApiUsers(prop: {
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
}) {

    let [isVisible, setIsVisible] = useState(true);

    const fetchUsers = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            if (Array.isArray(data)) {
                prop.setUsers(data as IUser[]);
                setIsVisible(false);
            } else {
                console.error("Некорректный формат данных", data);
                prop.setUsers([]);
            }
        } catch (error) {
            console.error("Ошибка при загрузке пользователей:", error);
            prop.setUsers([]);
        }
    };



    return isVisible &&
        <button
            className="btn-table" type="button" onClick={fetchUsers}>Get Users
        </button>
}




