import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: (process.env.GOOGLE_PRIVATE_KEY || '').split(String.raw`\n`).join('\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

if (!process.env.GOOGLE_SHEET_ID) {
  throw new Error('GOOGLE_SHEET_ID is not defined');
}
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);

(async () => {
  await doc.loadInfo(); // Loads document properties and worksheets
})();

export async function getWord(sheetIndex = 0) {
  try {
    await doc.loadInfo(); // Loads document properties and worksheets

    const sheet = doc.sheetsByIndex[sheetIndex];
    const rows = await sheet.getRows();
    const values = rows[Math.floor(Math.random() * rows.length)];
    const word = {
      word: values.get('word'),
      definition: values.get('definition'),
      type: values.get('type'),
      origin: values.get('origin'),
    };

    return word;

  } catch (error) {
    console.error('Error loading Google Sheet:', error);
    return [];
  }
}

