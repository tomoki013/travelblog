"use client";

import { useState } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
};

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSucces] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'applocation/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSucces(true);
                setFormData({ name: "", email: "", message: ""});
            } else {
                console.error('Error submitting form');
            }
        } catch (error) {
            console.error('Network error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <h2 className="text-center">お問い合わせフォーム</h2><hr />
            {success && <p>Thank you for your message! We will get back to you soon.</p>}
            <form
                onSubmit={handleSubmit}
                className="w-[280px] md:w-[400px] mx-auto"
            >
                <div className="flex justify-between mt-4">
                    <label htmlFor="name">お名前：</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-black rounded-md focus:rounded-none"
                        required
                    />
                </div>
                <div className="flex justify-between mt-4">
                    <label htmlFor="email">メールアドレス：</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-black rounded-md focus:rounded-none"
                        required
                    />
                </div>
                <div className="flex justify-between mt-4">
                    <label htmlFor="message">メッセージ：</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="border border-black rounded-md focus:rounded-none"
                        required
                    />
                </div>
                <div className="text-center mt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[var(--main-bg-color)] rounded-md border border-solid border-[var(--color-three)] p-2 text-[var(--text-color)] cursor-pointer"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
