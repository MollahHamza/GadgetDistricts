import dotenv from "dotenv";
dotenv.config();

import Airtable from "airtable-node";

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN,
  base: process.env.AIRTABLE_BASE,
  table: process.env.AIRTABLE_TABLE
});

// Convert to ES module export
export const handler = async () => {
  try {
    const response = await airtable.list({ maxRecords: 1000 });

    if (!response.records) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'No records found in Airtable.' }),
      };
    }

    // Filter out records with empty fields
    const products = response.records
      .filter(product => Object.keys(product.fields).length > 0)
      .map((product) => {
        const { id, fields } = product;
        return {
          id,
          ...fields,
          image: fields.images?.[0]?.url || null,
        };
      });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
