export const Budget = ({ users, loggedIn }) => {
    const currentUserExpenses = users.find(({ username }) => username == loggedIn)?.expenses

    return (
        <>
            Budget
            {currentUserExpenses?.map(({ description, amount }, i) => (
                <div key={i}>
                    <span>{description}</span>
                    <span>{amount}</span>
                </div>
            ))}
        </>
    )
}