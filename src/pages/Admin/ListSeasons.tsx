import React, { useEffect, useState } from 'react';
import {  ISeasonsItem } from '../../utils/types';
import http from '../../http';

export const ListSeasons = () => {
    const [allDirectors, setAllDirectors] = useState<ISeasonsItem[]>([]);
    const [addDirector, addDirectors] = useState<ISeasonsItem>({
        id: 0,
        year: "",
        number: 0,
        serialId: 0,
        title: ""
    });

    const [addingGenre, setAddingGenre] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editinYear, setEditingYear] = useState<string>("");
    const [editingNumber, setEditingNumber] = useState<number>(0);
    const [editingSerialId, setEditingSerialId] = useState<number>(0);
    const [editingTitle, setEditingTitle] = useState<string>('');

    useEffect(() => {
        fetchDirectors();
    }, []);

    const fetchDirectors = () => {
        http.get<ISeasonsItem[]>('/seasons/index')
            .then(resp => {
                setAllDirectors(resp.data);
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleNewDir = async () => {
        await http
            .post<ISeasonsItem>("/seasons/store", addDirector, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        fetchDirectors();
        setAddingGenre(false);


        setEditingId(null);
        setEditingNumber(0);
        setEditingYear('');
        setEditingSerialId(0);
        setEditingTitle('');
    };

    const handleDelete = (idD: number) => {
        http.post(`/seasons/delete`, { id: idD })
            .then(() => {
                fetchDirectors();
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleSaveChanges = () => {
        http.post(`/seasons/update`, {
            id: editingId,
            year: editinYear,
            number: editingNumber,
            serialId: editingSerialId,
            title: editingTitle
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



    const handleDoubleClick = (id: number, year: string, number: number, serialId: number, title: string) => {
        setEditingId(id);
        setEditingNumber(number);
        setEditingYear(year);
        setEditingSerialId(serialId);
        setEditingTitle(title);
    };

    const handleCancelEditing = () => {
        setEditingId(null);
        setEditingNumber(0);
        setEditingYear("");
        setEditingSerialId(0);
        setEditingTitle("");
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
                                <th scope="col">Year</th>
                                <th scope="col">Serial Id</th>
                                <th scope="col">Number</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allDirectors.map((item: ISeasonsItem) => (
                                <tr key={item.id}>
                                    <th scope="row"><a>{item.id}</a></th>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.year, item.number, item.serialId, item.title)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingTitle} onChange={(e) => setEditingTitle(e.target.value)} />
                                        ) : (
                                            <span>{item.title}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.year, item.number, item.serialId, item.title)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editinYear} onChange={(e) => setEditingYear(e.target.value)} />
                                        ) : (
                                            <span>{item.year}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.year, item.number, item.serialId, item.title)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingSerialId} onChange={(e) => setEditingSerialId(parseInt(e.target.value, 10))} />
                                        ) : (
                                            <span>{item.serialId}</span>
                                        )}
                                    </td>
                                    <td className="tm-product-name" onDoubleClick={() => handleDoubleClick(item.id, item.year, item.number, item.serialId, item.title)}>
                                        {editingId === item.id ? (
                                            <input type="text" value={editingNumber} onChange={(e) =>setEditingNumber(parseInt(e.target.value, 10))} />
                                        ) : (
                                            <span>{item.number}</span>
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
                                        <input type="text" value={addDirector.year} name='year' onChange={handleChange} className="form-control" placeholder="Enter year" />
                                    </td>
                                    <td>
                                        <input type="text" value={addDirector.serialId} name='serialId' onChange={handleChange} className="form-control" placeholder="Enter serialId" />
                                    </td>
                                    <td>
                                        <input type="text" value={addDirector.number} name='number' onChange={handleChange} className="form-control" placeholder="Enter number" />
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
