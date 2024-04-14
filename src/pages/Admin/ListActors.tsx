import React, { useEffect, useState } from 'react';
import { IActorsItem } from '../../utils/types';
import http from '../../http';

export const ListActors = () => {
    const [allDirectors, setAllDirectors] = useState<IActorsItem[]>([]);
    const [addDirector, addDirectors] = useState<IActorsItem>({
        id: 0,
        name: "",
        placeOfBirth: "",
        birthday: "",
        description: "",
        image: null,
    });

    const [addingGenre, setAddingGenre] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingName, setEditingName] = useState<string>('');
    const [editingPlaceOfBirth, setEditingPlaceOfBirth] = useState<string>('');
    const [editingBirthday, setEditingBirthday] = useState<string>('');
    const [editingDescription, setEditingDescription] = useState<string>('');

    useEffect(() => {
        fetchDirectors();
    }, []);

    const fetchDirectors = () => {
        http.get<IActorsItem[]>('/actors/index')
            .then(resp => {
                setAllDirectors(resp.data);
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleNewDir = async () => {
        await http
            .post<IActorsItem>("/actors/store", addDirector, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        fetchDirectors();
        setAddingGenre(false);


        setEditingId(null);
        setEditingName('');
        setEditingPlaceOfBirth('');
        setEditingBirthday('');
        setEditingDescription('');
    };

    const handleDelete = (idD: number) => {
        http.post(`/actors/delete`, { id: idD })
            .then(() => {
                fetchDirectors();
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleSaveChanges = () => {
        http.post(`/actors/update`, {
            id: editingId,
            name: editingName,
            placeOfBirth: editingPlaceOfBirth,
            birthday: editingBirthday,
            description: editingDescription
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
        addDirectors(prevState => ({
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

    const handleDoubleClick = (id: number, name: string, placeOfBirth: string, birthday: string, description: string) => {
        setEditingId(id);
        setEditingName(name);
        setEditingPlaceOfBirth(placeOfBirth);
        setEditingBirthday(birthday);
        setEditingDescription(description);
    };

    const handleCancelEditing = () => {
        setEditingId(null);
        setEditingName('');
        setEditingPlaceOfBirth('');
        setEditingBirthday('');
        setEditingDescription('');
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        addDirectors((prevState) => ({
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
                                <th scope="col">NAME</th>
                                <th scope="col">placeOfBirth</th>
                                <th scope="col">birthday</th>
                                <th scope="col">Description</th>
                                <th scope="col">image</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allDirectors.map((item: IActorsItem) => (
                                <tr key={item.id}>
                                    <th scope="row"><a>{item.id}</a></th>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.name, item.placeOfBirth, item.birthday, item.description)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingName} onChange={(e) => setEditingName(e.target.value)} />
                                        ) : (
                                            <span>{item.name}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.name, item.placeOfBirth, item.birthday, item.description)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingPlaceOfBirth} onChange={(e) => setEditingPlaceOfBirth(e.target.value)} />
                                        ) : (
                                            <span>{item.placeOfBirth}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.name, item.placeOfBirth, item.birthday, item.description)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingBirthday} onChange={(e) => setEditingBirthday(e.target.value)} />
                                        ) : (
                                            <span>{item.birthday}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.name, item.placeOfBirth, item.birthday, item.description)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingDescription} onChange={(e) => setEditingDescription(e.target.value)} />
                                        ) : (
                                            <span>{item.description}</span>
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
                                        <input type="text" value={addDirector.name} name='name' onChange={handleChange} className="form-control" placeholder="Enter genre name" />
                                    </td>
                                    <td>
                                        <input type="text" value={addDirector.placeOfBirth} name='placeOfBirth' onChange={handleChange} className="form-control" placeholder="Enter place Of Birth" />
                                    </td>
                                    <td>
                                        <input type="text" value={addDirector.birthday} name='birthday' onChange={handleChange} className="form-control" placeholder="Enter birthday" />
                                    </td>
                                    <td>
                                        <input type="text" value={addDirector.description} name='description' onChange={handleChange} className="form-control" placeholder="Enter description" />
                                    </td>
                                    <td>
                                        <input type="file" name='birthday' onChange={(e) => handleImageChange(e)} className="form-control" placeholder="Choose file" />
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
