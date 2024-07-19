import CountryCardList from "../components/CountryCardList";

interface HomePageProps {}

function HomePage(props: HomePageProps): React.JSX.Element {
  return (
    <>
      <CountryCardList />
    </>
  );
}

export default HomePage;
