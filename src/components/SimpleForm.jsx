import React, { useState } from 'react'

const SimpleForm = () => {


    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()






    const handleSubmit = (e) => {
        e.preventDefault()

        alert("Form Submitted")
        console.log("Name", name, "Email", email, "Password", password);
        setName("");
        setEmail("");
        setPassword("")


    }









    return (
        <>
            <h2>Registration Form</h2>




            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br />
                <br />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <br />

                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default SimpleForm
