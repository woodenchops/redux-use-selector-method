export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
};

export const decrement = (num) => {
    return {
        type: 'DECREMENT'
    }
};

export const toggleLoggedStatus = () => {
    return {
        type: 'SIGN_IN'
    };
};