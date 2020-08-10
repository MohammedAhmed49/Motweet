const initState = {
    posts: [
        {
            id: 1,
            user: 'Momo',
            date: new Date(),
            title: 'First title',
            body: 'This is a body for a post. This is a body for a post. This is a body for a post. This is a body for a post. '
        },
        {
            id: 2,
            user: 'Momo2',
            date: new Date(),
            title: 'Second title',
            body: 'This is a body for a post. This is a body for a post. This is a body for a post. This is a body for a post. '
        },
        {
            id: 3,
            user: 'Momo3',
            date: new Date(),
            title: 'Third title',
            body: 'This is a body for a post. This is a body for a post. This is a body for a post. This is a body for a post. '
        },
    ]
}

const reducer = (state = initState, action) => {
    return state;
}

export default reducer;