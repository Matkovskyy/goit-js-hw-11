import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGES = 40;
const KEY = '29395744-95b34d53a109031f8f7875032';

const fetchPictures = async(searchQuery, page) => {
    const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGES}&page=${page}`);
    return response.data; 
}
export default fetchPictures; 

