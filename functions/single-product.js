import dotenv from "dotenv";
dotenv.config();

import Airtable from "airtable-node";

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN,
  base: process.env.AIRTABLE_BASE,
  table: process.env.AIRTABLE_TABLE
});

// Convert to ES module export
export const handler = async (event) => {
  const { id } = event.queryStringParameters;
  
  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Please provide product id" }),
    };
  }

  try {
    const product = await airtable.retrieve(id);

    if (product.error || !product.fields || Object.keys(product.fields).length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: `No product found with id: ${id}` }),
      };
    }

    const formattedProduct = {
      id: product.id,
      ...product.fields,
      image: product.fields.images?.[0]?.url || null,
    };

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedProduct),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
