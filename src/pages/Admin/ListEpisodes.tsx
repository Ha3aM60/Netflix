import React, { useEffect, useState } from 'react';
import { IEpisodItem } from '../../utils/types';

import http from '../../http';


export const ListEpisodes = () => {
    const [allDirectors, setAllDirectors] = useState<IEpisodItem[]>([]);
    const [addDirector, addDirectors] = useState<IEpisodItem>({
        id: 0,
        description: "",
        path: "",
        seasonId: 0,
        title: "",
        time: ""
    });

    const [addingGenre, setAddingGenre] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editinDescription, setEditingDescription] = useState<string>('');
    const [editingPath, setEditingPath] = useState<string>('');
    const [editingSeasonId, setEditingSeasonId] = useState<number>(0);
    const [editingTitle, setEditingTitle] = useState<string>('');
    const [editingTime, setEditingTime] = useState<string>('');

    useEffect(() => {
        fetchDirectors();
    }, []);

    const fetchDirectors = () => {
        http.get<IEpisodItem[]>('/episodes/index')
            .then(resp => {
                setAllDirectors(resp.data);
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleNewDir = async () => {
        await http
            .post<IEpisodItem>("/episodes/store", addDirector, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        fetchDirectors();
        setAddingGenre(false);


        setEditingId(null);
        setEditingDescription('');
        setEditingPath('');
        setEditingSeasonId(0);
        setEditingTitle('');
        setEditingTime('');
    };

    const handleDelete = (idD: number) => {
        http.post(`/episodes/delete`, { id: idD })
            .then(() => {
                fetchDirectors();
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleSaveChanges = () => {
        http.post(`/episodes/update`, {
            id: editingId,
            description: editinDescription,
            path: editingPath,
            seasonId: editingSeasonId,
            title: editingTitle,
            time: editingTime
        })
            .then(() => {

                fetchDirectors();
            })
            .catch((error) => {

                setError(error);
            });
        handleCancelEditing();
    };


    const handleAddGenre = () => {
        setAddingGenre(true);
    };



    const handleDoubleClick = (id: number, description: string, path: string, seasonId: number, title: string,time: string) => {
        setEditingId(id);
        setEditingDescription(description);
        setEditingPath(path);
        setEditingSeasonId(seasonId);
        setEditingTitle(title);
        setEditingTime(time);
    };

    const handleCancelEditing = () => {
        setEditingId(null);
        setEditingDescription("");
        setEditingPath("");
        setEditingSeasonId(0);
        setEditingTitle("");
        setEditingTime("");
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
            <div className="tm-bg-primary-dark tm-block tm-block-products w-100">
                <div className="tm-product-table-container">
                    <table className="table table-hover tm-table-small tm-product-table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Time</th>
                                <th scope="col">Season Id</th>
                                <th scope="col">Path</th>
                                <th scope="col">Description</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allDirectors.map((item: IEpisodItem) => (
                                <tr key={item.id}>
                                    <th scope="row"><a>{item.id}</a></th>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.description, item.path, item.seasonId, item.title,item.time)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingTitle} onChange={(e) => setEditingTitle(e.target.value)} />
                                        ) : (
                                            <span>{item.title}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.description, item.path, item.seasonId, item.title,item.time)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingTime} onChange={(e) => setEditingTime(e.target.value)} />
                                        ) : (
                                            <span>{item.time}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.description, item.path, item.seasonId, item.title,item.time)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingSeasonId} onChange={(e) => setEditingSeasonId(parseInt(e.target.value, 10))} />
                                        ) : (
                                            <span>{item.seasonId}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.description, item.path, item.seasonId, item.title,item.time)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingPath} onChange={(e) => setEditingPath(e.target.value)} />
                                        ) : (
                                            <span>{item.path}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.description, item.path, item.seasonId, item.title,item.time)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editinDescription} onChange={(e) => setEditingDescription(e.target.value)} />
                                        ) : (
                                            <span>{item.description}</span>
                                        )}
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
                                        <input type="text" value={addDirector.title} name='title' onChange={handleChange} className="form-control" placeholder="Enter title" />
                                    </td>
                                    <td>
                                        <input type="text" value={addDirector.time} name='time' onChange={handleChange} className="form-control" placeholder="Enter time" />
                                    </td>
                                    <td>
                                        <input type="text" value={addDirector.seasonId} name='seasonId' onChange={handleChange} className="form-control" placeholder="Enter seasonId" />
                                    </td>
                                    <td>
                                        <input type="text" value={addDirector.path} name='path' onChange={handleChange} className="form-control" placeholder="Enter path" />
                                    </td>
                                    <td>
                                        <input type="text" value={addDirector.description} name='description' onChange={handleChange} className="form-control" placeholder="Enter description" />
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
