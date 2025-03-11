import { useState } from "react";
import FetchApiUsers from "./FetchApiUsers";
import ViewsTable from "./ViewsTable";
import { IUser } from "../intarface/IUser";


export default function TableSection() {

    const [users, setUsers] = useState<IUser[]>([]);




    return <>
        <section className="table-section">
            <h2>Table</h2>
            <ViewsTable users={users} />
            <FetchApiUsers setUsers={setUsers} />
        </section>
    </>
}