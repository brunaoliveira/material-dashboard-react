import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Linha do tempo
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography variant="button" color="text" fontWeight="medium" />
            Algo a ser colocado aqui?
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="add"
          title="2020 - Seis novos cursos ofertados"
          dateTime="Agrocomputação, Ciência de dados, Computação e TIC* em biociências e saúde, Criação digital, Inteligência artificial, Internet das coisas"
        />
        <TimelineItem
          color="info"
          icon="sync_alt"
          title="2019 - Um curso volta a ser ofertado também na modalidade Tecnológico"
          dateTime="Jogos digitais"
        />
        <TimelineItem
          color="success"
          icon="add"
          title="2018 - Novo curso ofertado"
          dateTime="Defesa cibernética"
        />
        <TimelineItem
          color="success"
          icon="science"
          title="2017 - Um curso passa a ser ofertado também na modalidade Tecnológico"
          dateTime="Programas interdisciplinares abrangendo computação e TIC*"
        />
        <TimelineItem
          color="error"
          icon="school"
          title="2015 - Um curso deixa de ser ofertado no grau Bacharelado"
          dateTime="Sistemas para internet"
        />
        <TimelineItem
          color="success"
          icon="add"
          title="2013 - Novo curso ofertado"
          dateTime="Sistemas embarcados"
        />
        <TimelineItem
          color="error"
          icon="school"
          title="2010 - Um curso deixa de ser ofertado no grau Tecnológico"
          dateTime="Engenharia da computação (DCN)"
        />
        <TimelineItem
          color="error"
          icon="menu_book"
          title="2010 - Nenhum curso é ofertado no grau de Licenciatura"
          dateTime="E assim permanece até os dias atuais"
        />

        <TimelineItem
          color="warning"
          icon="menu_book"
          title="2009 - Apenas um curso oferta o grau de Licenciatura"
          dateTime="Sistemas de informação"
        />
        <TimelineItem
          color="error"
          icon="school"
          title="2010 - Um curso deixa de ser ofertada no grau Bacharelado"
          dateTime="Jogos digitais"
        />
        <TimelineItem
          color="primary"
          icon="bar_chart"
          title="2009 - Primeiro ano de coleta dos dados, totalizando 11 cursos"
          dateTime="Banco de dados, Ciência da computação, Engenharia de computação (DCN Computação), Engenharia de software, Gestão da tecnologia da informação, Jogos digitais, Programas interdisciplinares abrangendo computação e TIC*, Redes de computadores, Segurança da informação, Sistemas de informação, "
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
