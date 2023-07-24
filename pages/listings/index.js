import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import styles from './listings.module.css';


const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handlePrev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };
    const images = [
        {
            src: 'https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/JPC-1652.jpg',
            alt: '',
            caption: 'The water was freezing!',
            className: `${styles.card_small} ${styles.card_exp}`
        },
        {
            src: 'https://wallpaperaccess.com/full/176937.jpg',
            alt: '',
            caption: 'The water was freezing!',
            className: `${styles.card_small} ${styles.card_exp}`
        },
        {
            src: 'https://img.freepik.com/fotos-gratis/floresta-do-outono_1182-869.jpg?w=2000',
            alt: '',
            caption: 'The fall came early!',
            className: `${styles.card_medium} ${styles.card_exp}`
        },
        {
            src: 'https://images.hdqwalls.com/wallpapers/beautiful-landscape-digital-art-4k-tj.jpg',
            alt: '',
            caption: 'The water was freezing!',
            className: `${styles.card_large} ${styles.card_exp}`
        },
        {
            src: 'https://external-preview.redd.it/vBmSeLVnhHRFlK0Se7WloKYhvOJhQ2pgftaesz33K30.png?auto=webp&s=dd6b2756b75924d866413cdeabcc3c202f5974c2',
            alt: '',
            caption: 'The water was freezing!',
            className: `${styles.card_small} ${styles.card_exp}`
        },
        {
            src: 'https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem.jpg',
            alt: '',
            caption: 'The water was freezing!',
            className: `${styles.card_small} ${styles.card_exp}`
        },
        {
            src: 'https://i.pinimg.com/736x/09/45/b8/0945b873ddd15f862b82890f82767e39.jpg',
            alt: '',
            caption: 'The water was freezing!',
            className: `${styles.card_medium} ${styles.card_exp}`
        },
        {
            src:
                'https://c.wallhere.com/photos/ab/f5/AI_art_landscape_digital_art_ocean_view_reflection_rocks_sunset_clouds-2223954.jpg!d',
            alt: '',
            caption: 'The water was freezing!',
            className: `${styles.card_large} ${styles.card_exp}`
        }
    ];

    return (
        <>
            <div className={styles.listings_body}>
                <main>
                    <section>
                        <h2></h2>
                        <p></p>
                        <p></p>
                    </section>

                    <div className={styles.container_grid}>
                        (
                        <Modal
                            open={showModal}
                            onClose={() => setShowModal(false)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'scroll',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '80vw',
                                    maxWidth: '100%',
                                    maxHeight: '80vh',
                                    bgcolor: 'background.paper',
                                    boxShadow: 24,
                                    p: 4,
                                }}
                            >
                                <IconButton
                                    aria-label="close"
                                    onClick={() => setShowModal(false)}
                                    sx={{
                                        position: 'absolute',
                                        top: 8,
                                        right: 8,
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100%',
                                        width: '100%',
                                        position: 'relative',
                                    }}
                                >
                                    <img
                                        src={images[currentIndex].src}
                                        alt={images[currentIndex].alt}
                                        style={{
                                            maxHeight: 'calc(80vh - 48px)', // Adjust the maxHeight to leave space for the button
                                            maxWidth: '100%',
                                            width: 'auto', // This ensures the image scales proportionally
                                            height: 'auto', // This ensures the image scales proportionally
                                            objectFit: 'contain',
                                        }}
                                    />

                                    <Button
                                        onClick={() => (window.location.href = '/bookings/1')}
                                        variant="contained"
                                        sx={{
                                            position: 'absolute',
                                            bottom: 16,
                                            right: 16,
                                            zIndex: 1,
                                        }}
                                    >
                                        Book Now
                                    </Button>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            width: '100%',
                                            mt: 2,
                                            position: 'absolute',
                                            bottom: 8,
                                        }}
                                    >
                                        <IconButton aria-label="previous" onClick={handlePrev}>
                                            <NavigateBeforeIcon />
                                        </IconButton>

                                        <IconButton aria-label="next" onClick={handleNext}>
                                            <NavigateNextIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Modal>
                        <div className={styles.carousel_images}>
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={image.className}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        setShowModal(true);
                                    }}
                                >
                                    <img
                                        className={styles.img_card}
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                    <figcaption>{image.caption}</figcaption>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default App;
