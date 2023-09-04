import "../assets/css/AccountList.css"

export const AccountList = ({ users }) => {
    return (
        <div id="accountList">
            <h2>Bank Accounts</h2>

            <div id="account-table">
                <div>
                    <span>Account Number</span>
                    <span>Account Name</span>
                    <span>Account Type</span>
                    <span>Balance</span>
                </div>
                {users.map(({ role, firstName, lastName, username, accountNumber, accountType, balance }) => (
                    role != "admin" && 
                    <div key={username}>
                        <span>{accountNumber}</span>
                        <span>{firstName} {lastName}</span>
                        <span>{accountType}</span>
                        <span>{balance}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

