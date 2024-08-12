import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputSurch = document.querySelector('.input');
const btnSub = document.querySelector('#searchForm');
const newsContainer = document.querySelector('.news');

inputSurch.addEventListener('input', () => {
  btnSub.disabled = inputSurch.value.trim() === '';
});

async function surch(query) {
  if (query.trim() === '') {
    iziToast.error({
      title: 'Помилка',
      message: 'Поле запиту не може бути порожнім.',
    });
    return [];
  }
  const apiKey = 'ce8f677110414806a753081c344c7117';
  const baseUrl = 'https://newsapi.org/v2/everything';
  const params = {
    q: query,
    from: '2024-07-15',
    sortBy: 'publishedAt',
    apiKey: apiKey,
  };
  const url = `${baseUrl}?` + new URLSearchParams(params).toString();
  console.log(url);

  try {
    const response = await axios.get(url);
    iziToast.show({
      title: 'Знайдено',
      color: 'green',
      message: `${response.data.totalResults} записів про " ${query} "`,
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error:', error);
    iziToast.error({
      title: 'Error',
      message: `${error.ye.message}`,
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
            <h3>${article.title} ${article.publishedAt}</h3>
            <p>${article.description}</p>
          </div>
        </div>
      `;
    })
    .join('');

  newsContainer.innerHTML = markup;
}
