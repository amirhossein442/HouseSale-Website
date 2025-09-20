export const WhyHousesale = () => {
  const whyHouseItems = [
    {
      img: "/img/pic1.jpg",
      txt1: "Transparent pricing",
      txt2: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/img/pic2.png",
      txt1: "Experts only",
      txt2: "Our professionals are well trained and have on-job expertise.",
    },
    {
      img: "/img/pic3.jpg",
      txt1: "Fully equipped",
      txt2: "We bring everything needed to get the job done well.",
    },
  ];
  return (
    <section className="why-housesale" id="why">
      <div className="why-housesale-box">
        <h2>Why Housesale Company?</h2>
        {whyHouseItems.map((items,index) => (
          <div className="why-info" key={index}>
            <img src={items.img} alt="pic1" />
            <div>
              <p>{items.txt1}</p>
              <p>{items.txt2}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="why-housesale-img">
        <img src="/img/whysale.jpg" alt="whysale" />
      </div>
    </section>
  );
};
