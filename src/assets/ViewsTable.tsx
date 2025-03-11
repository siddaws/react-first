import { useEffect, useState } from "react";
import { IUser } from "../intarface/IUser";


export default function ViewsTable(prop: { users: IUser[] }) {
    const [localUsers, setLocalUsers] = useState<IUser[]>([]);
    const [headersMap, setHeadersMap] = useState<string[]>([]);

    useEffect(() => {
        setLocalUsers(prop.users);
        if (prop.users.length > 0) {
            setHeadersMap(Object.keys(prop.users[0]));
        }
    }, [prop.users]);



    return (
        <table>
            <thead>
                <tr>
                    {
                        headersMap && headersMap.map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                </tr>
            </thead>
            <tbody>
                {localUsers.map((user: any) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.company.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
