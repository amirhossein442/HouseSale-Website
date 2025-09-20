export const Houses = () => {
  const HousesItems =[
    {
      img: '/img/house1.jpg',
      alt: 'house1',
    },
    {
      img: "/img/house2.jpg",
      alt: 'house12',
    },
    {
      img: '/img/house3.jpg',
      alt: 'house3',
    },
    {
      img: '/img/house4.jpg',
      alt: 'house4',
    },
    {
      img: '/img/house5.jpg',
      alt: 'house5',
    },
    {
      img: '/img/house6.jpg',
      alt: 'house6',
    },
    {
      img: '/img/house7.jpg',
      alt: 'house7',
    },
    {
      img: '/img/house8.jpg',
      alt: 'house8',
    },
  ]
  return (
    <section className="houses" id="houses">
      <h2>More ideas and inspiration</h2>
      <div className="house-img">
        {HousesItems.map((items,index)=>(
          <img src={items.img} alt={items.alt} key={index}/>
        ))}
      </div>
    </section>
  );
};
