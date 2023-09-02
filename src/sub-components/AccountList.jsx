export const AccountList = ({ users }) => {
    return (
        <>
            Bank Accounts

            <div>
                {users.map(({ firstName, lastName, username, accountNumber }, i) => (
                    i != 0 && 
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

