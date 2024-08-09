import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const inputSurch = document.querySelector('.input');
const btnSub = document.querySelector('#searchForm');
const newsContainer = document.querySelector('.news');

async function surch(query) {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiKey = 'ce8f677110414806a753081c344c7117';
  const baseUrl = 'https://newsapi.org/v2/everything';
  const params = {
    q: query,
    from: '2024-07-15',
    sortBy: 'relevancy',
    apiKey: apiKey,
  };
  const url = proxyUrl + baseUrl + '?' + new URLSearchParams(params).toString();

  try {
    const response = await axios.get(url);
    console.log(response.data);

    iziToast.show({
      title: 'FIND',
      color: 'green',
      message: `Found ${response.data.totalResults} articles`,
    });

    console.log(response.data.articles);
    return response.data.articles;
  } catch (error) {
    console.error('Error:', error);
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
    return [];
  }
}

btnSub.addEventListener('submit', async event => {
  event.preventDefault();
  const query = inputSurch.value;
  const articles = await surch(query);
  renderNews(articles);
  console.log(query);
});

function renderNews(articles) {
  const markup = articles
    .map(article => {
      return `
        <div class="news-card">
          <a href="${article.url}" target="_blank">
            <img src="${article.urlToImage}" alt="${article.title}" width='500' />
          </a>
          <div class="image-text">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
          </div>
        </div>
      `;
    })
    .join('');

  newsContainer.innerHTML = markup;
}
