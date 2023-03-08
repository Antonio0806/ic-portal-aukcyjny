import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const ProductComponent = ({ image, name, price, description, author, author_description }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => {
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };
    return (
        <div style={{ width: '200px', height: '325px', margin: '16px', border: '1px solid gray' }}>
            <img src={image} alt={name} style={{ width: '100%', height: '60%', objectFit: 'cover' }} />
            <div style={{ padding: '16px' }}>
                <div>{name}</div>
                <div style={{ fontWeight: 'bold' }}>{price}</div>
                <Button variant="contained" color="primary" onClick={handleModalOpen}>
                    Info
                </Button>
            </div>
            <Modal open={modalOpen} onClose={handleModalClose}>
                <div style={{ width: 'fit-content', height: 'fit-content', margin: 'auto', padding: '32px', backgroundColor: 'white', textAlign: "center" }}>
                    <h2>{name}</h2>
                    <p>{description}</p>

                    <h5>Autor: {author}</h5>
                    <p>{author_description}</p>
                    <h5>Cena wywoławcza: {price}</h5>
                    <img src={image} alt={name} style={{width: '350px', height: '350px', border: '1px solid gray'}} />
                </div>
            </Modal>
        </div>
    );
};

export default ProductComponent;
