import Banner from "../../components/Banner";
import Row from "../../components/Row";
import categories from "../../services/api";

import { Container } from "./styles";

export default function HomePage(){
  return(
    <Container>
      <Banner />
      {categories.map((category) => {
        return(
          <Row 
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
      
    </Container>
    
  )
}