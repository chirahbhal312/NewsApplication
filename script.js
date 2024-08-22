const newsArticles = [
    {
        id: 1,
        title: "Global Markets Rally as Economic Indicators Improve",
        description: "Global markets saw a significant rally today as economic indicators suggest a robust recovery from recent downturns.",
        imageUrl: "https://via.placeholder.com/400x200?text=Market+Rally",
        link: "news.html?id=1"
    },
    {
        id: 2,
        title: "New Technology Innovations Announced at Tech Conference",
        description: "The annual tech conference has unveiled groundbreaking innovations in AI, robotics, and quantum computing.",
        imageUrl: "https://via.placeholder.com/400x200?text=Tech+Innovations",
        link: "news.html?id=2"
    },
    {
        id: 3,
        title: "Health Officials Urge Vaccination Amidst Rising Cases",
        description: "Health officials are calling for increased vaccination rates as new cases of illness rise sharply.",
        imageUrl: "https://via.placeholder.com/400x200?text=Health+Update",
        link: "news.html?id=3"
    },
    {
        id: 4,
        title: "Exploration Missions to Mars Make Significant Progress",
        description: "Space agencies around the world are reporting major milestones in their missions to explore Mars.",
        imageUrl: "https://via.placeholder.com/400x200?text=Mars+Exploration",
        link: "news.html?id=4"
    },
    {
        id: 5,
        title: "Celebrity Charity Event Raises Millions for Education",
        description: "A charity event featuring numerous celebrities has successfully raised millions of dollars for education initiatives.",
        imageUrl: "https://via.placeholder.com/400x200?text=Charity+Event",
        link: "news.html?id=5"
    }
];

function displayNews() {
    const container = document.getElementById('news-container');
    newsArticles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('news-article');
        articleElement.innerHTML = `
            <img src="${article.imageUrl}" alt="${article.title}">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.link}">Read More</a>
        `;
        container.appendChild(articleElement);
    });
}

window.onload = displayNews;
