import React, { useState } from 'react'

const AdvancedForm = () => {


    const [formData, setFormData] = useState({
        gender: "",
        language: "urdu",
        agree: false,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);

    }


    const handleChange = (e) => {
        const { name, value, checked, type } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))

    }

    return (
        <>
            <form onSubmit={handleSubmit}>



                {/* Gender */}
                <label>Gender:</label>

                <label>
                    <input type="radio" name="gender" value="male" required onChange={handleChange} checked={formData.gender === "male"} />
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

                <br />
                <br />
                {/* Languages Dropdown */}
                <label htmlFor="language">Language:</label>

                <select id="language" name="language" value={formData.language} onChange={handleChange} required>
                    <option value="">Select Language</option>
                    <option value="english">English</option>
                    <option value="urdu">Urdu</option>
                    <option value="arabic">Arabic</option>
                    <option value="french">French</option>
                    <option value="spanish">Spanish</option>
                    <option value="chinese">Chinese</option>
                </select>


                <br /><br />

                {/* Agreement */}
                <label>
                    <input type="checkbox" name="agree" value={formData.agree} onChange={handleChange} />
                    I agree to the Terms and Conditions
                </label>

                <br /><br />

                <button type="submit">Submit</button>
            </form>


        </>
    )
}

export default AdvancedForm
