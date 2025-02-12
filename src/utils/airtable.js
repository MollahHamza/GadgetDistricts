// airtable.js

export const submitReview = async (reviewData) => {
  try {
    console.log('Submitting review data:', reviewData);

    const response = await fetch(
      `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_REVIEW_BASE}/${import.meta.env.VITE_AIRTABLE_REVIEW_TABLE}`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_AIRTABLE_PERSONAL_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Product: reviewData.Product,
            Review: reviewData.Review,
            Rating: reviewData.Rating,
            Reviewer: reviewData.Reviewer
          }
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable error response:', errorData);
      throw new Error(errorData.error?.message || 'Failed to submit review');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting review:', error);
    throw error;
  }
};

// Simplified fetchReviews function
export const fetchReviews = async (productId) => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_REVIEW_BASE}/${import.meta.env.VITE_AIRTABLE_REVIEW_TABLE}?filterByFormula=FIND("${productId}",ARRAYJOIN(Product,","))`,
      {
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_AIRTABLE_PERSONAL_ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }

    const data = await response.json();

    // Return only review and reviewer name
    return data.records.map(record => ({
      review: record.fields.Review,
      reviewer: record.fields.Reviewer,
    }));
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};
