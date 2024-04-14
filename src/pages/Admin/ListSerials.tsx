import React, { useEffect, useState } from 'react';
import { ISerialsItem } from '../../utils/types';

import http from '../../http';

export const ListSerials = () => {
    const [allMovies, setAllMovies] = useState<ISerialsItem[]>([]);
    const [addMovie, addMovies] = useState<ISerialsItem>({
        id: 0,
        description: "",
        slug: "",
        time: "",
        title: "",
        directorId: "",
        age: "",
        year: "",
        country: "",
        image: null
    });

    const [addingGenre, setAddingGenre] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingTitle, setEditingTitle] = useState<string>('');
    const [editingDescription, setEditingDescription] = useState<string>('');
    const [editingSlug, setEditingSlug] = useState<string>('');
    const [editingTime, setEditingTime] = useState<string>('');
    const [editingDirectorId, setEditingDirectorId] = useState<string>('');
    const [editingAge, setEditingAge] = useState<string>('');
    const [editingYear, setEditingYear] = useState<string>('');
    const [editingCountry, setEditingCountry] = useState<string>('');

    useEffect(() => {
        fetchDirectors();
    }, []);

    const fetchDirectors = () => {
        http.get<ISerialsItem[]>('/serials/index')
            .then(resp => {
                setAllMovies(resp.data);
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleNewDir = async () => {
        await http
            .post<ISerialsItem>("/serials/store", addMovie, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        fetchDirectors();
        setAddingGenre(false);
    };

    const handleDelete = (idD: number) => {
        http.post(`/serials/delete`, { id: idD })
            .then(() => {
                fetchDirectors();
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleSaveChanges = () => {
        http.post(`/serials/update`, {
            id: editingId,
            description: editingDescription,
            slug: editingSlug,
            time: editingTime,
            title: editingTitle,
            directorId: editingDirectorId,
            age: editingAge,
            year: editingYear,
            country: editingCountry
        })
            .then(() => {

                fetchDirectors();
            })
            .catch((error) => {

                setError(error);
            });
        handleCancelEditing();
    };

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        addMovies(prevState => ({
            ...prevState,
            image: file
        }));
    };

    const handleAddGenre = () => {
        setAddingGenre(true);
    };

    const handleImageClick = (imageUrl: string) => {
        setFullscreenImage(imageUrl);
    };

    const closeFullscreenImage = () => {
        setFullscreenImage(null);
    };

    const handleDoubleClick = (id: number, title: string, description: string, slug: string, time: string, directorId: string, age: string, year: string, country: string) => {
        setEditingId(id);
        setEditingTitle(title);
        setEditingDescription(description);
        setEditingSlug(slug);
        setEditingTime(time);
        setEditingDirectorId(directorId);
        setEditingAge(age);
        setEditingYear(year);
        setEditingCountry(country);
    };

    const handleCancelEditing = () => {
        setEditingId(0);
        setEditingTitle("");
        setEditingDescription("");
        setEditingSlug("");
        setEditingTime("");
        setEditingDirectorId("");
        setEditingAge("");
        setEditingYear("");
        setEditingCountry("");
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        addMovies((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    return (
        <>
            {fullscreenImage && (
                <div className="fullscreen-image" onClick={closeFullscreenImage}>
                    <img src={fullscreenImage} alt="Fullscreen" />
                </div>
            )}
            <div className="tm-bg-primary-dark tm-block tm-block-products w-100">
                <div className="tm-product-table-container">
                    <table className="table table-hover tm-table-small tm-product-table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Slug</th>
                                <th scope="col">Time</th>
                                <th scope="col">Director</th>
                                <th scope="col">Age</th>
                                <th scope="col">Year</th>
                                <th scope="col">Country</th>
                                <th scope="col">Image</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allMovies.map((item: ISerialsItem) => (
                                <tr key={item.id}>
                                    <th scope="row"><a>{item.id}</a></th>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.title, item.description, item.slug, item.time, item.directorId, item.age, item.year, item.country)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingTitle} onChange={(e) => setEditingTitle(e.target.value)} />
                                        ) : (
                                            <span>{item.title}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.title, item.description, item.slug, item.time, item.directorId, item.age, item.year, item.country)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingDescription} onChange={(e) => setEditingDescription(e.target.value)} />
                                        ) : (
                                            <span>{item.description}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.title, item.description, item.slug, item.time, item.directorId, item.age, item.year, item.country)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingSlug} onChange={(e) => setEditingSlug(e.target.value)} />
                                        ) : (
                                            <span>{item.slug}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.title, item.description, item.slug, item.time, item.directorId, item.age, item.year, item.country)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingTime} onChange={(e) => setEditingTime(e.target.value)} />
                                        ) : (
                                            <span>{item.time}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.title, item.description, item.slug, item.time, item.directorId, item.age, item.year, item.country)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingDirectorId} onChange={(e) => setEditingDirectorId(e.target.value)} />
                                        ) : (
                                            <span>{item.directorId}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.title, item.description, item.slug, item.time, item.directorId, item.age, item.year, item.country)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingAge} onChange={(e) => setEditingAge(e.target.value)} />
                                        ) : (
                                            <span>{item.age}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.title, item.description, item.slug, item.time, item.directorId, item.age, item.year, item.country)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingYear} onChange={(e) => setEditingYear(e.target.value)} />
                                        ) : (
                                            <span>{item.year}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.title, item.description, item.slug, item.time, item.directorId, item.age, item.year, item.country)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingCountry} onChange={(e) => setEditingCountry(e.target.value)} />
                                        ) : (
                                            <span>{item.country}</span>
                                        )}
                                    </td>
                                    <td>
                                        <img
                                            style={{ width: '50px', cursor: 'pointer' }}
                                            src={`${"http://127.0.0.1:8000/uploads/" + item.image + ""}`}
                                            alt=""
                                            onClick={() => handleImageClick("http://127.0.0.1:8000/uploads/" + item.image)}
                                        />
                                    </td>
                                    <td>
                                        {editingId === item.id ? (
                                            <>
                                                <button onClick={handleSaveChanges} className="btn btn-success bi bi-check"></button>
                                                <button onClick={handleCancelEditing} className="btn btn-danger bi bi-x"></button>
                                            </>
                                        ) : (
                                            <button onClick={() => handleDelete(item.id)} className="btn btn-danger">
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {addingGenre && (
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" value={addMovie.title} name='title' onChange={handleChange} className="form-control" placeholder="Enter title" />
                                    </td>
                                    <td>
                                        <input type="text" value={addMovie.description} name='description' onChange={handleChange} className="form-control" placeholder="Enter description" />
                                    </td>
                                    <td>
                                        <input type="text" value={addMovie.slug} name='slug' onChange={handleChange} className="form-control" placeholder="Enter slug" />
                                    </td>
                                    <td>
                                        <input type="text" value={addMovie.time} name='time' onChange={handleChange} className="form-control" placeholder="Enter time" />
                                    </td>
                                    <td>
                                        <input type="text" value={addMovie.directorId} name='directorId' onChange={handleChange} className="form-control" placeholder="Enter directorId" />
                                    </td>
                                    <td>
                                        <input type="text" value={addMovie.age} name='age' onChange={handleChange} className="form-control" placeholder="Enter age" />
                                    </td>
                                    <td>
                                        <input type="text" value={addMovie.year} name='year' onChange={handleChange} className="form-control" placeholder="Enter year" />
                                    </td>
                                    <td>
                                        <input type="text" value={addMovie.country} name='country' onChange={handleChange} className="form-control" placeholder="Enter country" />
                                    </td>
                                    <td>
                                        <input type="file" name='image' onChange={(e) => handleImageChange(e)} className="form-control" placeholder="Choose file" />
                                    </td>
                                    <td>
                                        <button onClick={handleNewDir} className="btn btn-success"><i className="bi bi-check"></i></button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="d-flex flex-row justify-content-between w-100">
                    <button onClick={handleAddGenre} className="btn btn-dark btn-block text-uppercase"><i className="bi bi-plus"></i></button>
                </div>
                <p className="text-danger">{error}</p>
            </div>
        </>
    );
};
