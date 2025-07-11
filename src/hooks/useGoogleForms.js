
// src/hooks/useGoogleForms.js
import { useState, useCallback } from 'react';

const useGoogleForms = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const forms = {
    contact: import.meta.env.VITE_GOOGLE_FORMS_CONTACT,
    newsletter: import.meta.env.VITE_GOOGLE_FORMS_NEWSLETTER
  };
  
  const openForm = useCallback((formType, embedded = false) => {
    const formUrl = forms[formType];
    if (!formUrl) {
      console.error(`Form URL not found for type: ${formType}`);
      return;
    }
    
    if (embedded) {
      return `${formUrl}?embedded=true`;
    } else {
      window.open(formUrl, '_blank', 'width=600,height=800');
    }
  }, [forms]);
  
  const submitToGoogleForms = useCallback(async (formData, formType) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simuler la soumission (Google Forms ne permet pas la soumission programmatique directe)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Ouvrir le formulaire Google
      openForm(formType);
      
      return { success: true };
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return { success: false, error };
    }
  }, [openForm]);
  
  return {
    forms,
    openForm,
    submitToGoogleForms,
    isSubmitting,
    submitStatus
  };
};

export { useGoogleForms };
