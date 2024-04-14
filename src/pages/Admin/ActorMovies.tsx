import React, { useEffect, useState } from 'react';
import { IActorMovies, IActorsSerials, IGenreItem, IGenreMovies, IGenreSerials } from '../../utils/types';
import { useNavigate } from 'react-router-dom';
import http from '../../http';

export const ActorsMovies = () => {
    const [allGenres, setAllGenres] = useState<IActorMovies[]>([]);
    const [error, setError] = useState<string>('');
    const [addingGenre, setAddingGenre] = useState<boolean>(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingGenreId, setGenreId] = useState<string>("");
    const [addGenreMovies, setGenreMovies] = useState<IActorMovies>({
        id: 0,
        actorId: "",
        movieId: "",
        actors_name: "",
        movie_title: ""
    });
    useEffect(() => {
        fetchDirectors();
    }, []);

    const fetchDirectors = () => {
        http.get<IActorMovies[]>('/actorMovies/index')
            .then(resp => {
                setAllGenres(resp.data);
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleNewDir = async () => {
        await http
            .post<IActorMovies>("/actorMovies/store", addGenreMovies, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        fetchDirectors();
        setAddingGenre(false);
    };

    const handleDelete = (idD: number) => {
        http.post(`/actorMovies/delete`, { id: idD })
            .then(() => {
                fetchDirectors();
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleSaveChanges = () => {
        http.post(`/actorMovies/update`, {
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

    const handleDoubleClick = (id: number, actorId: string) => {
        setEditingId(id);
        setGenreId(actorId);
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
                                <th scope="col">Actor Id</th>
                                <th scope="col">Actor Name</th>
                                <th scope="col">Movie Id</th>
                                <th scope="col">Movie Title</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allGenres.map((item: IActorMovies) => (
                                <tr key={item.id}>
                                    <th scope="row"><a>{item.id}</a></th>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.actorId)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingGenreId} onChange={(e) => setGenreId(e.target.value)} />
                                        ) : (
                                            <span>{item.actorId}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name">
                                        
                                            <span>{item.actors_name}</span>
                                       
                                    </td>
                                    <td className="tm-product-name">
                                        
                                            <span>{item.movieId}</span>
                                        
                                    </td>
                                    <td className="tm-product-name" >
                                        
                                            <span>{item.movie_title}</span>
                                        
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
                                        <input type="text" value={addGenreMovies.actorId} name='actorId' onChange={handleChange} className="form-control" placeholder="Enter actor Id" />
                                    </td>
                                    <td>
                                        <input type="text" value={addGenreMovies.movieId} name='movieId' onChange={handleChange} className="form-control" placeholder="Enter movie id" />
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
