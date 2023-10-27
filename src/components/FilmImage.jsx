import { Col, Card } from "react-bootstrap";
const FilmImage = (film) => {
  return (
    <Col xs={6} sm={6} md={4} lg={3} xl={2} className="px-0">
      <Card className="border-0 ">
        <Card.Img
          style={{ height: "300px" }}
          className=""
          variant="top"
          src={film.film.Poster}
        />
      </Card>
    </Col>
  );
};
export default FilmImage;
