const newsArticles = [
    {
        id: 1,
        title: "Global Markets Rally as Economic Indicators Improve",
        description: "Global markets saw a significant rally today as economic indicators suggest a robust recovery from recent downturns.",
        imageUrl: "https://via.placeholder.com/800x400?text=Market+Rally",
        content: `
            <p>Global markets have experienced a significant rally today. Economic indicators, including improved job reports and strong retail sales, suggest a robust recovery from recent downturns. Analysts are optimistic that these positive trends will continue, leading to sustained market growth.</p>
            <p>The rally has been broad-based, with gains across most sectors. Investors are encouraged by the data and are increasing their investments, which is driving up stock prices.</p>
            <p>The recovery is attributed to several factors, including government stimulus measures, consumer spending, and business investments. As the economy continues to recover, experts predict further gains in the coming months.</p>
        `
    },
    {
        id: 2,
        title: "New Technology Innovations Announced at Tech Conference",
        description: "The annual tech conference has unveiled groundbreaking innovations in AI, robotics, and quantum computing.",
        imageUrl: "https://via.placeholder.com/800x400?text=Tech+Innovations",
        content: `
            <p>The annual tech conference has showcased several groundbreaking innovations in technology. Highlights include advancements in artificial intelligence, robotics, and quantum computing.</p>
            <p>Keynote speakers from leading tech companies presented their latest developments. AI innovations include more advanced natural language processing and machine learning algorithms. In robotics, new prototypes promise to enhance automation in various industries.</p>
            <p>Quantum computing advancements were also a major focus. Researchers demonstrated improved quantum processors and discussed their potential applications in fields like cryptography and complex simulations.</p>
        `
    },
    {
        id: 3,
        title: "Health Officials Urge Vaccination Amidst Rising Cases",
        description: "Health officials are calling for increased vaccination rates as new cases of illness rise sharply.",
        imageUrl: "https://via.placeholder.com/800x400?text=Health+Update",
        content: `
            <p>Health officials are urging the public to get vaccinated as new cases of illness rise sharply. The increase in cases has raised concerns about potential strain on healthcare systems and the risk of severe outbreaks.</p>
            <p>Vaccination campaigns are being intensified, with clinics offering extended hours and additional resources. Officials emphasize the importance of vaccination in preventing severe illness and reducing the spread of the disease.</p>
            <p>Recent data shows that vaccinated individuals are less likely to experience severe symptoms or require hospitalization. Public health messaging is focusing on the benefits of vaccination and the safety of the vaccines available.</p>
        `
    },
    {
        id: 4,
        title: "Exploration Missions to Mars Make Significant Progress",
        description: "Space agencies around the world are reporting major milestones in their missions to explore Mars.",
        imageUrl: "https://via.placeholder.com/800x400?text=Mars+Exploration",
        content: `
            <p>Space agencies around the world have reported significant progress in their missions to explore Mars. Recent milestones include successful landing of rovers and collection of valuable data from the Martian surface.</p>
            <p>The latest missions have provided new insights into Mars' geology, atmosphere, and potential for past life. Researchers are analyzing samples and data collected by the rovers to understand more about the planet's history.</p>
            <p>Future missions are planned to further explore Mars, with goals including the search for signs of life and the preparation for potential human exploration. The advancements in technology and international collaboration are paving the way for more ambitious space exploration.</p>
        `
    },
    {
        id: 5,
        title: "Celebrity Charity Event Raises Millions for Education",
        description: "A charity event featuring numerous celebrities has successfully raised millions of dollars for education initiatives.",
        imageUrl: "https://via.placeholder.com/800x400?text=Charity+Event",
        content: `
            <p>A recent charity event featuring numerous celebrities has successfully raised millions of dollars for educational initiatives. The event included performances, auctions, and speeches by well-known figures who are passionate about supporting education.</p>
            <p>Funds raised will go towards scholarships, school improvements, and educational programs in underserved communities. The event was well-attended and received widespread media coverage, highlighting the importance of investing in education.</p>
            <p>Organizers expressed gratitude to the participants and donors for their support. The success of the event demonstrates the power of celebrity influence in raising awareness and funds for important causes.</p>
        `
    }
];

function loadNewsDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'), 10);

    const article = newsArticles.find(article => article.id === id);

    if (article) {
        document.getElementById('news-detail').innerHTML = `
            <img src="${article.imageUrl}" alt="${article.title}">
            <h1>${article.title}</h1>
            <p>${article.content}</p>
        `;
    } else {
        document.getElementById('news-detail').innerHTML = `
            <h1>Article Not Found</h1>
            <p>The article you are looking for does not exist.</p>
        `;
    }
}

window.onload = loadNewsDetail;
