import React, { useState } from 'react';

// StudentForm component using render props
const StudentForm = ({ render }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData({ name, email });
    };

    return render({
        name,
        email,
        setName,
        setEmail,
        handleSubmit,
        submittedData
    });
};

// StudentApplication component
const StudentApplication = () => {
    return (
        <StudentForm
            render={({ name, email, setName, setEmail, handleSubmit, submittedData }) => (
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    {submittedData && (
                        <div>
                            <h1>Submitted Data</h1>
                            <p>Name: {submittedData.name}</p>
                            <p>Email: {submittedData.email}</p>
                        </div>
                    )}
                </div>
            )}
        />
    );
};

export default StudentApplication;