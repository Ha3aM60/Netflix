import React, { useEffect, useState } from 'react';
import { IGenreItem, IGenreMovies, IGenreSerials } from '../../utils/types';
import { useNavigate } from 'react-router-dom';
import http from '../../http';

export const GenreSerials = () => {
    const [allGenres, setAllGenres] = useState<IGenreSerials[]>([]);
    const [error, setError] = useState<string>('');
    const [addingGenre, setAddingGenre] = useState<boolean>(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingGenreId, setGenreId] = useState<string>("");
    const [addGenreMovies, setGenreMovies] = useState<IGenreSerials>({
        id: 0,
        genreId: "",
        serialsId: "",
        genre_name: "",
        serial_title: "",
        image: ""
    });
    useEffect(() => {
        fetchDirectors();
    }, []);

    const fetchDirectors = () => {
        http.get<IGenreSerials[]>('/genreSerials/index')
            .then(resp => {
                setAllGenres(resp.data);
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleNewDir = async () => {
        await http
            .post<IGenreMovies>("/genreSerials/store", addGenreMovies, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        fetchDirectors();
        setAddingGenre(false);
    };

    const handleDelete = (idD: number) => {
        http.post(`/genreSerials/delete`, { id: idD })
            .then(() => {
                fetchDirectors();
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleSaveChanges = () => {
        http.post(`/genreSerials/update`, {
            id: editingId,
            genreId: editingGenreId
        })
            .then(() => {

                fetchDirectors();
            })
            .catch((error) => {

                setError(error);
            });
            handleCancelEdit();
    };

    const handleAddGenre = () => {
        setAddingGenre(true);
    };

    const handleDoubleClick = (id: number, genreId: string) => {
        setEditingId(id);
        setGenreId(genreId);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setGenreMovies((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setGenreId('');
    };

    return (
        <>
            <div className="tm-bg-primary-dark tm-block tm-block-products w-100">
                <div className="tm-product-table-container">
                    <table className="table table-hover tm-table-small tm-product-table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Genre Id</th>
                                <th scope="col">Genre Name</th>
                                <th scope="col">Movies Id</th>
                                <th scope="col">Movies Title</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allGenres.map((item: IGenreSerials) => (
                                <tr key={item.id}>
                                    <th scope="row"><a>{item.id}</a></th>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.genreId)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingGenreId} onChange={(e) => setGenreId(e.target.value)} />
                                        ) : (
                                            <span>{item.genreId}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name">
                                        
                                            <span>{item.genre_name}</span>
                                       
                                    </td>
                                    <td className="tm-product-name">
                                        
                                            <span>{item.serialsId}</span>
                                        
                                    </td>
                                    <td className="tm-product-name" >
                                        
                                            <span>{item.serial_title}</span>
                                        
                                    </td>
                                    <td>
                                        {editingId === item.id ? (
                                            <>
                                                <button onClick={handleSaveChanges} className="btn btn-success bi bi-check"></button>
                                                <button onClick={handleCancelEdit} className="btn btn-danger bi bi-x"></button>
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
                                        <input type="text" value={addGenreMovies.genreId} name='genreId' onChange={handleChange} className="form-control" placeholder="Enter genre id" />
                                    </td>
                                    <td>
                                        <input type="text" value={addGenreMovies.serialsId} name='serialsId' onChange={handleChange} className="form-control" placeholder="Enter serial id" />
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
