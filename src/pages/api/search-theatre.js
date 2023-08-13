import fetch from 'node-fetch';

export default async function searchMoviesByTheatre(req, res) {  
  const { theatreName, queryStartDate } =  req.query;  
  const url = process.env.PSTMN_MOCK_API;
  const queryString = `?theater_name=${encodeURIComponent(theatreName)}&d_date=${encodeURIComponent(queryStartDate)}`;
  const searchUrl = `${url}/specific_movie_theater${queryString}`;
  const response = await fetch(searchUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }
  const data = await response.json();
  res.status(200).json(data.data)
}

