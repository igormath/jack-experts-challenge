async function getUser(email: string){
    try {
        const response = await fetch(`http://localhost:3000/user/${email}`);
        const data = await response.json();
        return {
            data,
            status: response.status,
            ok: response.ok,
        };
    } catch (error) {
        console.error(error);
        return {
            data: null,
            error: 500,
            ok: false,
        };
    }
}

export {getUser};
