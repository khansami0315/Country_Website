import "./Contact.css";
export const Contact = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(Object.fromEntries(formData.entries()));
    }

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <div className="contact-wrapper container">
                <form onSubmit={handleFormSubmit} className="contact-form">
                    <input
                        type="text"
                        required
                        autoComplete="off"
                        placeholder="Enter Your Name"
                        name="username"
                        className="form-input"
                    />

                    <input
                        type="email"
                        required
                        autoComplete="off"
                        placeholder="Enter Your Email"
                        name="email"
                        className="form-input"
                    />

                    <textarea
                        className="form-textarea"
                        rows="10"
                        placeholder="Enter your message"
                        name="message"
                        required
                        autoComplete="off"
                    ></textarea>

                    <button type="submit" className="form-button">Send Message</button>
                </form>
            </div>
        </section>
    )
}