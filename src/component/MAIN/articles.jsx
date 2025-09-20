export const Article = () => {
  const articleItems = [
    {
      img: '/img/article1.jpg',
      text: "article1"
    },
    {
      img: '/img/article2.jpg',
      text: "article2"
    },
    {
      img: '/img/article3.jpg',
      text: "article3"
    }
  ];

  return (
    <section className="articles" id="articles">
      {articleItems.map((item,index) => (
        <div className="article" key={index}>
          <img src={item.img} alt={item.text} />
          <div className="article-title">
            <span>&gt;</span>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};