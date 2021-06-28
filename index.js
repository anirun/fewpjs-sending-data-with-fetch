const submitData = ( a, b ) => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: a,
            email: b
        })
    })
            .then(response => response.json())
            .then(object => document.body.append(object.id))
            .catch(object => document.body.append(object.message))
}