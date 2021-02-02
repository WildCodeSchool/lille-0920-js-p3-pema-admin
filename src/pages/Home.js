import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <h1>SERN Authentication Template</h1>

      <p>
        This authentication template uses SQL, Express, React, and Node.js.
      </p>

      <p>
        <a
          href="https://www.lavoixdunord.fr/706940/article/2020-02-07/une-dizaine-de-voitures-rayees-dans-le-centre-ville-de-calais-trois-adolescents?referer=%2Farchives%2Frecherche%3Fdatefilter%3Dlastyear%26sort%3Ddate%2520desc%26word%3Dvoiture%2520ray%25C3%25A9es"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Faits divers
        </a>
      </p>
      
      <p> Protected Route: <Link to="/profile">Profile Page</Link></p>
    </Container>
  );
};

export default Home;
