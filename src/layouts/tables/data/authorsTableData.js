/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import MDProgress from "components/MDProgress";

export default function data() {
  const Curso = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={1} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Progress = ({ color, value, mlvalue, mrvalue }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography mr={mrvalue} ml={mlvalue} variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox alignItems="center" ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "curso", accessor: "curso", width: "45%", align: "left" },
      { Header: "modalidade presencial", accessor: "modalidade", align: "left" },
      { Header: "grau", accessor: "grau", align: "center" },
      { Header: "ofertas em 2020", accessor: "ofertas", align: "center" },
    ],

    rows: [
      {
        curso: <Curso name="Agrocomputação" />,
        modalidade: <Progress color="text" value={100} mlvalue={1.3} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Banco de Dados" />,
        modalidade: <Progress color="text" value={2.28} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            613
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Ciência da Computação" />,
        modalidade: <Progress color="text" value={20.06} mlvalue={0} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="sm" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1854
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Ciência de dados" />,
        modalidade: <Progress color="text" value={0.55} mlvalue={0.8} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="sm" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1634
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Computação e TIC* em biociências e saúde" />,
        modalidade: <Progress color="text" value={71.42} mlvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="sm" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            7
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Criação digital" />,
        modalidade: <Progress color="text" value={100} mlvalue={1.3} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="sm" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Defesa cibernética" />,
        modalidade: <Progress color="text" value={0.59} mlvalue={0.8} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            671
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Engenharia de computação (DCN Computação)" />,
        modalidade: <Progress color="text" value={71.43} mlvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            133
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Engenharia de software" />,
        modalidade: <Progress color="text" value={4.59} mlvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="sm" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1525
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Gestão da tecnologia da informação" />,
        modalidade: <Progress color="text" value={3.35} mlvalue={0.8} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            4422
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Inteligência artificial" />,
        modalidade: <Progress color="text" value={50} mlvalue={1.3} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="sm" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Internet das coisas" />,
        modalidade: <Progress color="text" value={0.0} mlvalue={2} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            215
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Jogos digitais" />,
        modalidade: <Progress color="text" value={7.77} mlvalue={-1} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="sm" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1120
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Programas interdisciplinares abrangendo computação e TIC*" />,
        modalidade: <Progress color="text" value={2.71} mlvalue={-1} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="sm" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            185
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Redes de computadores" />,
        modalidade: <Progress color="text" value={10.57} mlvalue={-1.1} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1854
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Segurança da informação" />,
        modalidade: <Progress color="text" value={2.46} mlvalue={1.3} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="sm" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1014
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Sistemas de informação" />,
        modalidade: <Progress color="text" value={10.43} mlvalue={-1.2} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="sm" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            9413
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Sistemas embarcados" />,
        modalidade: <Progress color="text" value={100} mlvalue={0.2} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Sistemas para internet" />,
        modalidade: <Progress color="text" value={6.99} mlvalue={-0.9} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1359
          </MDTypography>
        ),
      },
    ],
  };
}
