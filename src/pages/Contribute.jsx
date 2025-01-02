// src/pages/Contribute.jsx
import React from 'react';
import { useTheme } from '../components/ThemeProvider';
import { useTranslation } from '../context/LanguageContext';

const FormModal = ({ type, onClose, t, styles }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    linkedin: '',
    topic: '',
    description: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // À implémenter : logique d'envoi du formulaire
    console.log('Form submitted:', type, formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${styles.card} max-w-lg w-full max-h-[90vh] overflow-y-auto`}>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">{t(`contribute.forms.${type}.title`)}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">{t('contribute.form.name')}</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg border"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-1">{t('contribute.form.email')}</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg border"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-1">{t('contribute.form.linkedin')}</label>
              <input
                type="url"
                className="w-full px-4 py-2 rounded-lg border"
                value={formData.linkedin}
                onChange={e => setFormData({...formData, linkedin: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-1">{t('contribute.form.topic')}</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg border"
                value={formData.topic}
                onChange={e => setFormData({...formData, topic: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-1">{t('contribute.form.description')}</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border"
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100"
              >
                {t('contribute.form.cancel')}
              </button>
              <button
                type="submit"
                className={`${styles.button} px-6 py-2 rounded-lg`}
              >
                {t('contribute.form.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const ContributePage = () => {
  const { styles } = useTheme();
  const { t } = useTranslation();
  const [activeForm, setActiveForm] = React.useState(null);

  const forms = ['participate', 'suggestTopic', 'recommendGuest'];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{t('contribute.title')}</h1>
      <p className={`${styles.text} mb-8`}>{t('contribute.subtitle')}</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {forms.map(form => (
          <div key={form} className={styles.card}>
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold mb-4">
                {t(`contribute.forms.${form}.title`)}
              </h2>
              <p className={`${styles.text} mb-6`}>
                {t(`contribute.forms.${form}.description`)}
              </p>
              <button
                onClick={() => setActiveForm(form)}
                className={`${styles.button} px-6 py-2 rounded-lg`}
              >
                {t(`contribute.forms.${form}.button`)}
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeForm && (
        <FormModal
          type={activeForm}
          onClose={() => setActiveForm(null)}
          t={t}
          styles={styles}
        />
      )}
    </div>
  );
};