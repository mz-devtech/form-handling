import React, { useRef } from 'react'

export const UncontrolledForm = () => {

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()





    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Name", nameRef.current.value);
        console.log("Email", emailRef.current.value);
        console.log("Password", passwordRef.current.value);
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";


    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    ref={nameRef}

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
                    ref={emailRef}

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
                    ref={passwordRef}

                />

                <br />
                <br />

                <button type="submit">Register</button>
            </form>


        </>
    )
}
