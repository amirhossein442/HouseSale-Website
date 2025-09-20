export const MoreCall = () => {
  const MoreCallItems = [
    {
      img: "/img/article3.jpg",
      alt: "more-call-pic1",
    },
    {
      img: "/img/article2.jpg",
      alt: "more-call-pic2",
    },
    {
      img: "/img/article1.jpg",
      alt: "more-call-pic3",
    },
  ];
  return (
    <section className="more-call" id="more-call">
      <div className="more-call-txt">
        <h2>More ideas and inspiration</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          ducimus ut, animi dolore perferendis eaque! Excepturi praesentium quos
          repellendus, ut dolor id vel expedita reprehenderit culpa veritatis
          sequi quae? Ad. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eius maxime eum tempora aperiam nisi quas enim quaerat
          laudantium expedita magnam velit dignissimos, repellendus quam,
          tempore doloribus ex? Temporibus, aliquid et.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          consequatur temporibus, dicta sequi quas, incidunt, odit similique
          quibusdam culpa neque laborum velit ipsam a tempora quae sed
          voluptatem rem excepturi!
        </p>
        <button>More Collection</button>
      </div>
      <div className="more-call-pic">
        {MoreCallItems.map((item,index) => (
          <img src={item.img} alt={item.alt} key={index} />
        ))}
      </div>
    </section>
  );
};
