import React, { useState } from 'react'

export const MultiInputForm = () => {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
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
                    onChange={handleChange}
                    value={formData.name}
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
                    onChange={handleChange}
                    value={formData.email}
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
                    onChange={handleChange}
                    value={formData.password}
                />

                <br />
                <br />

                <button type="submit">Register</button>
            </form>

        </>
    )
}
