import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { IContact } from '../types';

export const ContactForm = ({ title, copy, cta }: IContact) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCKxsofnqG_w5bGe2rPYhNDk_HEHc6uBpo",
    authDomain: "brainiacbooks-web.firebaseapp.com",
    projectId: "brainiacbooks-web",
    storageBucket: "brainiacbooks-web.firebasestorage.app",
    messagingSenderId: "414639474484",
    appId: "1:414639474484:web:7c9548c77bee05909dc761",
    measurementId: "G-M2W3TPV7S6"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const onValidateEmail = () => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email?.match(isValidEmail)) {
      setError(true);
      return;
    }
    handleEmailSubmit(email);
  };

  const handleEmailSubmit = async (email: string) => {
    try {
      await addDoc(collection(db, "emails"), {
        email,
      });
      setSuccess(true);
    } catch (e) {
      setError(true);
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setSuccess(false);
  }

  useEffect(() => {
    setError(false);
  }, [email]);

  return (
    <div className="contactFormContainer">
      <div className="contactForm">
        <h2>{title}</h2>
        <p>{copy}</p>

        <div className='contactFormInputWrapper'>
          <input 
            className={error ? 'hasError' : ''}
            value={email} 
            onChange={e => handleEmailChange(e.target.value)} 
            placeholder="Enter Your Email" 
            type='email'
            required
          />
          
          <button 
            onClick={() => onValidateEmail()}
            className={error ? 'hasError' : success ? 'hasSuccess' : ''}
          >{error ? 'HUH?' : success ? 'DONE!' : cta}</button>
        </div>
      </div>
    </div>
  );
}