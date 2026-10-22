import React, { useState } from 'react'

const Test = () => {

    // const [name, setName] = useState()

    const initialFormData = {
        name: "",
        email: "",
        password: "",
        language: "",
        gender: "",
        agree: false,

    }


    const [formData, setFormData] = useState(initialFormData)


    const handleChange = (e) => {
        const { name, value, checked, type } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))







    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        setFormData(initialFormData)

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
                    value={formData.name}
                    onChange={handleChange}

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
                    value={formData.email}
                    onChange={handleChange}

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
                    value={formData.password}
                    onChange={handleChange}

                />

                <br />
                <br />
                <label htmlFor="language">Language:</label>

                <select id="language" value={formData.language} onChange={handleChange} name="language" required>
                    <option value="">Select Language</option>
                    <option value="english">English</option>
                    <option value="urdu">Urdu</option>
                    <option value="arabic">Arabic</option>
                    <option value="french">French</option>
                    <option value="spanish">Spanish</option>
                    <option value="chinese">Chinese</option>
                </select>
                <br />
                <br />
                {/* Gender */}
                <label>Gender:</label>

                <label>
                    <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} required />
                    Male
                </label>

                <label>
                    <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} />
                    Female
                </label>

                <label>
                    <input type="radio" name="gender" value="other" checked={formData.gender === "other"} onChange={handleChange} />
                    Other
                </label>
                <br /><br />

                {/* Agreement */}
                <label>
                    <input type="checkbox" name="agree" onChange={handleChange} checked={formData.agree} />
                    I agree to the Terms and Conditions
                </label>
                <br /><br />
                <button type="submit">Register</button>
            </form>


        </>
    )
}

export default Test
