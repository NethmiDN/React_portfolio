import { useState } from 'react';
import emailjs from '@emailjs/browser';
import contactImg from '../assets/contactimg.png';

const Contact = ({darkMode}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus({ type: '', message: '' });

        const compiledMessage = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage:\n${formData.message}`;

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    to_email: 'nethminanayakkara277@gmail.com',
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    full_name: `${formData.firstName} ${formData.lastName}`.trim(),
                    reply_to: formData.email,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: compiledMessage,
                    details: compiledMessage,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus({ type: 'success', message: 'Thanks! Your message was sent.' });
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        } catch (error) {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
        } finally {
            setIsSending(false);
        }
    };

  return (
    <section
    id="contact"
    style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb'
    }}
    className='py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-8 sm:mb-10 md:mb-12'
            data-aos='fade-up'>
                <h2
                className='text-2xl sm:text-3xl md:text-4xl font-bold
                mb-2 sm:mb-3'
                style={{
                    color: darkMode ? 'white' : '#1f2937'
                }}>
                    Get In <span
                    style={{
                        background: 'linear-gradient(to right, #f97316, #f59e0b)' ,
                        WebkitBackgroundClip: 'text' ,
                        backgroundClip: 'text' ,
                        color: 'transparent'
                    }}>
                        Touch
                    </span>
                </h2>
                <p
                className='text-base sm:text-lg md:text-xl'
                style={{
                    color: darkMode ? '#d1d5db' : '#6b7280'
                }}>
                    Let's discuss your project
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6
            sm:gap-8 md:gap-10 items-center'>
                <div className='flex justify-center order-2 lg:order-1'
                data-aos='fade-right'>
                    <img src={contactImg} alt='Contact' 
                    className='w-full max-w-ws sm:max-w-sm lg:max-w-md
                    h-auto object-contain'></img>
                </div>
                <form
                onSubmit={handleSubmit}
                style={{
                    background: darkMode
                    ? 'linear-gradient(to right, #1f2937, #111827)'
                    : 'linear-gradient(to right, #ffffff, #f9fafb)',
                    borderColor: darkMode ? '#374151' : '#e5e7eb'
                }}
                className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border
                shadow-lg order-1 lg:order-2'
                data-aos='fade-left'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3
                    sm:gap-4 mb-4 sm:mb-5'>
                        {/* First Name */}
                        <input 
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        style={{
                            backgroundColor: darkMode ? '#374151' : '#faede3' ,
                            borderColor: darkMode ? '#4b5563' : '#d1d5db' ,
                            color: darkMode ? 'white' : '#1f2937'
                        }}
                        value={formData.firstName}
                        onChange={handleChange}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3
                        rounded-lg text-sm sm:text-base
                        focus:border-orange-500 focus:ring-2
                        focus:ring-orange-500/20 transition-all'
                        required/>

                        {/* Last Name */}
                        <input 
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        style={{
                            backgroundColor: darkMode ? '#374151' : '#faede3' ,
                            borderColor: darkMode ? '#4b5563' : '#d1d5db' ,
                            color: darkMode ? 'white' : '#1f2937'
                        }}
                        value={formData.lastName}
                        onChange={handleChange}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3
                        rounded-lg text-sm sm:text-base
                        focus:border-orange-500 focus:ring-2
                        focus:ring-orange-500/20 transition-all'
                        required/>
                    </div>

                    <div className='flex flex-col gap-3 sm:gap-4'>
                        {/* Email */}
                        <input 
                        type='email'
                        name='email'
                        placeholder='Email Address'
                        style={{
                            backgroundColor: darkMode ? '#374151' : '#faede3' ,
                            borderColor: darkMode ? '#4b5563' : '#d1d5db' ,
                            color: darkMode ? 'white' : '#1f2937'
                        }}
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3
                        rounded-lg text-sm sm:text-base
                        focus:border-orange-500 focus:ring-2
                        focus:ring-orange-500/20 transition-all'
                        required/>

                        {/* Phone Number */}
                        <input 
                        type='tel'
                        name='phone'
                        placeholder='Phone Number'
                        style={{
                            backgroundColor: darkMode ? '#374151' : '#faede3' ,
                            borderColor: darkMode ? '#4b5563' : '#d1d5db' ,
                            color: darkMode ? 'white' : '#1f2937'
                        }}
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3
                        rounded-lg text-sm sm:text-base
                        focus:border-orange-500 focus:ring-2
                        focus:ring-orange-500/20 transition-all'
                        required/>

                        {/* Message */}
                        <textarea 
                        rows='4'
                        name='message'
                        placeholder='Message'
                        style={{
                            backgroundColor: darkMode ? '#374151' : '#faede3' ,
                            borderColor: darkMode ? '#4b5563' : '#d1d5db' ,
                            color: darkMode ? 'white' : '#1f2937'
                        }}
                        value={formData.message}
                        onChange={handleChange}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3
                        rounded-lg text-sm sm:text-base
                        focus:border-orange-500 focus:ring-2
                        focus:ring-orange-500/20 transition-all
                        resize-none'
                        required/>

                        {/* Submit Button */}
                        <button
                        type='submit'
                        disabled={isSending}
                        style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)'
                        }}
                        className='w-full py-2 sm:py-3 text-white
                        font-semibold rounded-lg text-sm sm:text-base
                        hover:shadow-lg hover:shadow-orange-500/25
                        hover:scale-[1.02] transition-all disabled:opacity-70'>
                            {isSending ? 'Sending...' : 'Send Message'}
                        </button>

                        {status.message && (
                            <p
                            className={`text-sm ${
                                status.type === 'success'
                                ? 'text-green-500'
                                : 'text-red-500'
                            }`}
                            >
                                {status.message}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
      
        </section>
    );
}

export default Contact
