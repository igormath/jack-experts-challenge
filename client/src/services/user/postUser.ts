async function postUser(name: string, email:string, password: string) {
    try {
        const response = await fetch("http://localhost:3000/user", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                name: name,
                password: password,
            }),
        });
        const data = await response.json();
        return {
            data: data,
            status: response.status,
            ok: response.ok
        };
    } catch (error) {
        console.error(error);
        return {
            data: error,
            status: 500,
            ok: false
        }
    }
}

export default postUser;
