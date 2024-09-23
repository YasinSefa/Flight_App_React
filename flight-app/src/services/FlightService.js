export const getFlights = async () => {
  try {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.schiphol.nl/public-flights/flights', {
      method: 'GET',
      headers: {
        'ResourceVersion': 'v4',
        'app_id': '62349580',
        'app_key': '717c99e89e192d494bee97669f8ebb36'
      }
    });


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.flights;
  } catch (error) {
    console.error('Error fetching flights:', error);
    throw error;
  }
};