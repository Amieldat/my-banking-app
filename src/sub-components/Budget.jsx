export const Budget = ({ users, loggedIn }) => {
    const currentUserExpenses = users.find(({ username }) => username == loggedIn)?.expenses

    return (
        <div id="budget">
            <h2>Budget</h2>
            {currentUserExpenses?.map(({ description, amount }, i) => (
                <div key={i}>
                    <span>{description}</span>
                    <span>{amount}</span>
                </div>
            ))}
        </div>
    )
}