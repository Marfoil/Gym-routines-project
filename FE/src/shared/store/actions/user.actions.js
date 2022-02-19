export const setUserType = '[USER] Set user';
export const setUserAction = (user) => {
    return {
        type: setUserType,
        payload: user
    };
}