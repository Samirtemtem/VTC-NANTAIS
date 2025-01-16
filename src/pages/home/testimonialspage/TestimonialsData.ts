import { fetchGoogleReviews } from "../../../services/googlePlaces";

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  url: string;
}

// Fallback data in case API fails
const fallbackTestimonials: Testimonial[] = [
  {
    id: "fallback-1",
    name: "Client Satisfait",
    text: "Service exceptionnel ! Une expérience de location vraiment luxueuse.",
    url: "./images/testimonials/default-avatar.png",
  },
];

export const getTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const googleReviews = await fetchGoogleReviews();
    
    if (googleReviews.length === 0) {
      return fallbackTestimonials;
    }

    return googleReviews.map((review, index) => ({
      id: review.time ? review.time.toString() : `review-${index}`,
      name: review.author_name,
      text: review.text,
      url: review.profile_photo_url || "./images/testimonials/default-avatar.png",
    }));
  } catch (error) {
    console.error('Error loading testimonials:', error);
    return fallbackTestimonials;
  }
};
