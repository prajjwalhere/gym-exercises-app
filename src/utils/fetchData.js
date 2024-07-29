
export const exerciseOptions =  {
    method: 'GET',
   // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'x-rapidapi-key': '1a3ac44d10mshb5e0278fe0bfdefp14e8d7jsnfc5c903c36e8',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
   
    headers: {
      'x-rapidapi-key': '1a3ac44d10mshb5e0278fe0bfdefp14e8d7jsnfc5c903c36e8',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data =  await response.json();

    return data;
}