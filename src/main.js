const inputSurch = document.querySelector('.input');
const btnSub = document.querySelector('#searchForm');
const newsContainer = document.querySelector('.news');

async function surch(query) {
  const apiKey = 'ce8f677110414806a753081c344c7117';
  const baseUrl = 'https://newsapi.org/v2/everything';
  const params = {
    q: query,
    from: '2024-07-15',
    sortBy: 'relevancy',
    apiKey: apiKey,
    // language: 'ru',
  };
  const url = `${baseUrl}?` + new URLSearchParams(params).toString();
  try {
    const response = await axios.get(url);
    return response.data.articles; // Використовуємо response.data.articles
  } catch (error) {
    console.error('Error:', error);
    return []; // Повертаємо пустий масив у разі помилки
  }
}

btnSub.addEventListener('submit', async event => {
  event.preventDefault();
  const query = inputSurch.value;
  const articles = await surch(query); // Чекаємо результат
  renderNews(articles); // Викликаємо функцію renderNews з результатом
  console.log(query);
});

function renderNews(articles) {
  const markup = articles
    .map(article => {
      return `
                        <div class="news-card">
                            <a href="${article.url}" target="_blank">
                                <img src="${article.urlToImage}" alt="${article.title}" />
                            </a>
                            <div class="image-text">
                                <h3>${article.title}</h3>
                                <p>${article.description}</p>
                            </div>
                        </div>
                    `;
    })
    .join('');

  newsContainer.innerHTML = markup; // Оновлюємо вміст контейнера новин
}
