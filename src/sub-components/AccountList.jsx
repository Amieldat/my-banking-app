export const AccountList = ({ users }) => {
    return (
        <div id="accountList">
            <h2>Bank Accounts</h2>

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
        </div>
    )
}

