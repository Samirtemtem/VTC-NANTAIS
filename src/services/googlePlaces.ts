interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url: string;
  time: number;
}

interface GooglePlacesResponse {
  result: {
    reviews: GoogleReview[];
  };
}

export const fetchGoogleReviews = async (): Promise<GoogleReview[]> => {
  try {
    // Replace with your actual Google Place ID and API Key
    const placeId = 'ChIJA1g50DTuBUgRg5aTCvcAtyM';
    const apiKey = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
    
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch Google reviews');
    }

    const data: GooglePlacesResponse = await response.json();
    return data.result.reviews;
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return [];
  }
}
