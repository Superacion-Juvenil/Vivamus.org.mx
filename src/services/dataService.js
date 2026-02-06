// Service to load JSON data files (simulating backend API)
import eventInfoData from '../data/eventInfo.json';
import pricingData from '../data/pricing.json';
import categoriesData from '../data/categories.json';
import sponsorsData from '../data/sponsors.json';
import galleryData from '../data/gallery.json';
import faqData from '../data/faq.json';
import contactData from '../data/contact.json';
import aboutData from '../data/about.json';

/**
 * Load event information
 */
export const getEventInfo = async () => {
  return Promise.resolve(eventInfoData);
};

/**
 * Load pricing information
 */
export const getPricing = async () => {
  return Promise.resolve(pricingData);
};

/**
 * Load categories information
 */
export const getCategories = async () => {
  return Promise.resolve(categoriesData);
};

/**
 * Load sponsors information
 */
export const getSponsors = async () => {
  return Promise.resolve(sponsorsData);
};

/**
 * Load gallery images
 */
export const getGallery = async () => {
  return Promise.resolve(galleryData);
};

/**
 * Load FAQ data
 */
export const getFAQ = async () => {
  return Promise.resolve(faqData);
};

/**
 * Load contact information
 */
export const getContact = async () => {
  return Promise.resolve(contactData);
};

/**
 * Load about information
 */
export const getAbout = async () => {
  return Promise.resolve(aboutData);
};

/**
 * Save registration to localStorage (simulating backend)
 * @param {Object} registrationData - Registration form data
 * @returns {Object} - Saved registration with ID and timestamp
 */
export const saveRegistration = (registrationData) => {
  try {
    const registrations = getRegistrations();
    const newRegistration = {
      id: Date.now().toString(),
      ...registrationData,
      createdAt: new Date().toISOString(),
    };
    registrations.push(newRegistration);
    localStorage.setItem('mercoVivamusRegistrations', JSON.stringify(registrations));
    return newRegistration;
  } catch (error) {
    console.error('Error saving registration:', error);
    throw error;
  }
};

/**
 * Get all registrations from localStorage
 * @returns {Array} - Array of registrations
 */
export const getRegistrations = () => {
  try {
    const stored = localStorage.getItem('mercoVivamusRegistrations');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error getting registrations:', error);
    return [];
  }
};
