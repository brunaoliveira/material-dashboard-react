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
      { Header: "ofertas", accessor: "ofertas", align: "center" },
    ],

    rows: [
      {
        curso: <Curso name="Agrocomputação" />,
        modalidade: <Progress color="text" value={100} mlvalue={1.3} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
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
        modalidade: <Progress color="text" value={16.39} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1437
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Ciência da Computação" />,
        modalidade: <Progress color="text" value={64.21} mlvalue={0} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6589
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Ciência de dados" />,
        modalidade: <Progress color="text" value={0.55} mlvalue={0.8} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
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
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
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
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Defesa cibernética" />,
        modalidade: <Progress color="text" value={1.06} mlvalue={0.8} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            944
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Engenharia de computação (DCN Computação)" />,
        modalidade: <Progress color="text" value={65.39} mlvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1165
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Engenharia de software" />,
        modalidade: <Progress color="text" value={11.45} mlvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3182
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Gestão da tecnologia da informação" />,
        modalidade: <Progress color="text" value={8.05} mlvalue={0.8} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            18292
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Inteligência artificial" />,
        modalidade: <Progress color="text" value={50} mlvalue={1.3} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
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
        modalidade: <Progress color="text" value={0} mlvalue={2} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
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
        modalidade: <Progress color="text" value={25.63} mlvalue={-1} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2365
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Programas interdisciplinares abrangendo computação e TIC*" />,
        modalidade: <Progress color="text" value={11.47} mlvalue={-1} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            888
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Redes de computadores" />,
        modalidade: <Progress color="text" value={40.98} mlvalue={-1.1} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6814
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Segurança da informação" />,
        modalidade: <Progress color="text" value={11} mlvalue={1.3} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1851
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Sistemas de informação" />,
        modalidade: <Progress color="text" value={26.88} mlvalue={-1.2} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="licenciatura" color="warning" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            42662
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Sistemas embarcados" />,
        modalidade: <Progress color="text" value={100} mlvalue={0.2} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Sistemas para internet" />,
        modalidade: <Progress color="text" value={26.98} mlvalue={-0.9} mrvalue={0} />,
        grau: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        ofertas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            5291
          </MDTypography>
        ),
      },
    ],
  };
}
