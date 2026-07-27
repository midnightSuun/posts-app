import { useUsers } from "../api/get-user"

export function UsersView() {
    const {data: users} = useUsers()

    return (
        <div>
            {users?.data.map((item) => (
                <div>
                    {item.displayName}
                </div>
            ))}
        </div>
    )
}