import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import Row from "../../components/Row";
import categories from "../../services/api";

import { Container } from "./styles";

interface CategoryProps {
  name: string;
  title: string;
  path: string;
  isLarge: boolean;
}

export default function HomePage(){
  return(
    <Container>
      <Navbar />
      <Banner />
      {categories.map((category: CategoryProps) => {
        return(
          <Row 
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge} name={""} original_name={""} poster_path={""} id={0}          />
        );
      })}
      
    </Container>
    
  )
}