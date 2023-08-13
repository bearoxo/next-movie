import fetch from 'node-fetch';

export default async function searchMoviesByTimeslot(req, res) {  
  const { theatreName, queryStartTime, queryEndTime } =  req.query;  
  const url = process.env.PSTMN_MOCK_API;
  const queryString = `?theater_name=${encodeURIComponent(theatreName)}&time_start=${encodeURIComponent(queryStartTime)}&time_end=${encodeURIComponent(queryEndTime)}`;
  const searchUrl = `${url}/timeslot${queryString}`
  const response = await fetch(searchUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }
  const data = await response.json();
  res.status(200).json(data.data)
}