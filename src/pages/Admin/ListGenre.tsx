import React, { useEffect, useState } from 'react';
import { IGenreItem } from '../../utils/types';
import { useNavigate } from 'react-router-dom';
import http from '../../http';

export const ListGenre = () => {
    const [allGenres, setAllGenres] = useState<IGenreItem[]>([]);
    const [error, setError] = useState<string>('');
    const [addingGenre, setAddingGenre] = useState<boolean>(false);
    const [editingGenreId, setEditingGenreId] = useState<number | null>(null);
    const [newGenreName, setNewGenreName] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchGenres();
    }, []);

    const fetchGenres = () => {
        http.get<IGenreItem[]>('/genre/index')
            .then(resp => {
                setAllGenres(resp.data);
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleDelete = (id: number) => {
        http.post(`/genre/delete/${id}`)
            .then(() => {
                fetchGenres();
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleAddGenre = () => {
        setAddingGenre(true);
    };

    const handleSaveNewGenre = () => {
        http.post('/genre/store', { name: newGenreName })
            .then(() => {
                fetchGenres();
                setAddingGenre(false);
                setNewGenreName('');
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleEditGenre = (id: number) => {
        setEditingGenreId(id);
        const genreToEdit = allGenres.find(genre => genre.id === id);
        if (genreToEdit) {
            setNewGenreName(genreToEdit.name);
        }
    };

    const handleSaveEditedGenre = () => {
        if (!editingGenreId) return;
        http.post(`/genre/update/${editingGenreId}`, { name: newGenreName })
            .then(() => {
                fetchGenres();
                setEditingGenreId(null);
                setNewGenreName('');
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleCancelEdit = () => {
        setEditingGenreId(null);
        setNewGenreName('');
    };

    return (
        <>
            <div className="tm-bg-primary-dark tm-block tm-block-products w-100">
                <div className="tm-product-table-container">
                    <table className="table table-hover tm-table-small tm-product-table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NAME</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allGenres.map((item: IGenreItem) => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td className="tm-product-name">
                                        {editingGenreId === item.id ? (
                                            <>
                                                <input type="text" value={newGenreName} onChange={(e) => setNewGenreName(e.target.value)} className="form-control" />
                                                <button onClick={handleSaveEditedGenre} className="btn btn-success"><i className="bi bi-check"></i></button>
                                                <button onClick={handleCancelEdit} className="btn btn-danger"><i className="bi bi-x"></i></button>
                                            </>
                                        ) : (
                                            <span onDoubleClick={() => handleEditGenre(item.id)}>{item.name}</span>
                                        )}
                                    </td>
                                    <td>
                                        {editingGenreId !== item.id && (
                                            <button onClick={() => handleDelete(item.id)} className="btn btn-danger"><i className="bi bi-trash"></i></button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {addingGenre && (
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" value={newGenreName} onChange={(e) => setNewGenreName(e.target.value)} className="form-control" placeholder="Enter genre name" />
                                    </td>
                                    <td>
                                        <button onClick={handleSaveNewGenre} className="btn btn-success"><i className="bi bi-check"></i></button>
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
