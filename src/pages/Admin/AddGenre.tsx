import React, { useState } from 'react';
import { IGenreItem } from '../../utils/types';
import { Form } from "react-bootstrap";


export const AddGenre = () => {
    const [genre, setGenre] = useState<IGenreItem>({
        id: 0,
        name: ""
    });
    const [loading, setLoading] = useState(true);
    const [validated, setValidated] = useState(false);
    const [ErrorServer, setErrorServer] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setGenre((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    return (
        <>
            <Form noValidate validated={validated} onSubmit={() => { }}>
                <Form.Group className="mb-3" controlId="formCategoryName" >
                    <Form.Label style={{
                        color: 'white',
                        fontSize: "30px"
                    }}>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter genre name"
                        name="name"
                        value={genre.name}
                        required
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a category name.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>

        </>
    )

}