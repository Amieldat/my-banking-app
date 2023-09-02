export const AccountList = ({ users }) => {
    return (
        <>
            Bank Accounts

            <div>
                {users.map(({ role, firstName, lastName, username, accountNumber }) => (
                    role != "admin" && 
                    <div key={username}>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                        <span>{accountNumber}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

