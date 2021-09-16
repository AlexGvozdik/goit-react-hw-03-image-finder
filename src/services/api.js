import axios from 'axios'
const key = '22976896-bd5d8392eebfe801bc51d8ead'
const url='https://pixabay.com/api/';

 function fetchImages({ searchQuery, page}){
    return  axios
    .get(
        `${url}?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(response=> response.data.hits)
};


const Api={
    fetchImages,
}
export default Api;