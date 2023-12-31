import Head from 'next/head';
import styles from './bookings.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';


export default function Bookings() {
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform any form submission logic here
        // For this example, we will just show the success message
        setIsSuccess(true);
    };
    return (
        <div className={styles.mainscreen}>
            <Head>
                <title>Checkout Page</title>
                <meta name="description" content="Checkout page with Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.card}>
                <div className={styles.leftside}>
                    <Carousel showThumbs={false} showStatus={false}>
                        <div>
                            <img
                                src="https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/JPC-1652.jpg"
                                className={styles.product}
                                alt="Shoes"
                            />x``
                        </div>
                        <div>
                            <img
                                src="https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/JPC-00127.jpg?t=2023-07-24T01%3A05%3A30.746Z" // Replace with the URL of the second image
                                className={styles.product}
                                alt="Shoes"
                            />
                        </div>
                        <div>
                            <img
                                src="https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/JPC-00161-min.jpg"
                                className={styles.product}
                                alt="Shoes"
                            />
                        </div>
                        {/* Add more <div> elements with different images for additional carousel items */}
                    </Carousel>
                </div>
                <div className={styles.rightside}>
                    <form action="" onSubmit={handleSubmit}>
                        <h1>CheckOut</h1>
                        <h2>Payment Information</h2>
                        <div className={styles['input-container']}>
                            <p>Name</p>
                            <input type="text" className={styles.inputbox} name="name" required />
                        </div>
                        <div className={styles['input-container']}>
                            <p>Phone Number</p>
                            <input type="number" className={styles.inputbox} name="phone_number" id="card_number" required />
                        </div>

                        <div className={styles['input-container']}>
                            <p>Meal Preference</p>
                            <select className={styles.inputbox} name="card_type" id="card_type" required>
                                <option value="">--Select a meal--</option>
                                <option value="Visa">Breakfast</option>
                                <option value="RuPay">Lunch</option>
                                <option value="MasterCard">Dinner</option>
                            </select>
                        </div>

                        <div className={styles.expcvv}>
                            <div className={styles['input-container']}>
                                <p className={styles.expcvv_text}>Booking date</p>
                                <input type="date" className={styles.inputbox} name="exp_date" id="exp_date" required />
                            </div>

                            <div className={styles['input-container']}>
                                <p className={styles.expcvv_text2}>Dietary requirements</p>
                                <input type="password" className={styles.inputbox} name="cvv" id="cvv" required />
                            </div>
                        </div>

                        <p></p>
                        <button type="submit" className={styles.button}>
                            CheckOut
                        </button>
                    </form>
                    {isSuccess && (
                        <div className={styles.success}>
                            <p>Booking successful! Thank you for your booking.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
