import "../assets/css/AccountList.css"
import "../assets/css/Universal.css"

export const AccountList = ({ users }) => {
    return (
    <div className="account-list">
      <h2 className="account-list-heading">Bank Accounts</h2>

      <div className="account-table">
        <div className="table-header">
          <span className="table-header-cell">Account Number</span>
          <span className="table-header-cell">Account Name</span>
          <span className="table-header-cell">Account Type</span>
          <span className="table-header-cell">Balance</span>
        </div>
        {users.map(
          ({
            role,
            firstName,
            lastName,
            username,
            accountNumber,
            accountType,
            balance,
          }) =>
            role !== "admin" && (
              <div key={username} className="table-row">
                <span className="table-cell">{accountNumber}</span>
                <span className="table-cell">
                  {firstName} {lastName}
                </span>
                <span className="table-cell">{accountType}</span>
                <span className="table-cell">${balance}</span>
              </div>
            )
        )}
      </div>
    </div>
  );
};