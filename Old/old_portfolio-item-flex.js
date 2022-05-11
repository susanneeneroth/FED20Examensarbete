<FlexPortfolioItem key={p.id}>
  {/* <FeaturedMedia id={item.featured_media} /> */}
  {portfolioImages.map((item, i) => (
    <Image src={item.img} key={i} />
  ))}
  {/* {portfolioImages.find((img) => p.id === img.id)} */}
  {/* <Image src={ImagePlaceholder} /> */}
  <Link link={p.link} key={p.id}>
    <h2>{p.title.rendered}</h2>
    <Html2React html={p.excerpt.rendered} />
  </Link>
</FlexPortfolioItem>;

const FlexPortfolioItem = styled.div`
  color: #cbe4f5;
  text-align: center;
  margin-top: 10px;
  max-width: 300px;

  h2 {
    font-family: "pacifico";
    color: #1ba098;
    text-align: left;
    margin-left: 20px;
  }

  p {
    text-align: left;
    margin-left: 20px;
  }
`;
