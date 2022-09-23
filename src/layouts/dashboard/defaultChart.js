// import React from "react";
// import plotly from "plotly.js/dist/plotly";
// import createPlotComponent from "react-plotly.js/factory";

// const Plot = createPlotComponent(plotly);

// function defaultChart() {
//   // const imgStyle = {
//   //   height: "50%",
//   //   width: "100%",
//   // };

//   const data = [
//     {
//       type: "pie",
//       values: [
//         3, 613, 1854, 1634, 7, 6, 671, 133, 1525, 4422, 4, 215, 1120, 185, 1854, 1014, 9413, 3,
//         1359,
//       ],
//       labels: [
//         "Agrocomputação",
//         "Banco de dados",
//         "Ciência da computação",
//         "Ciência de dados",
//         "Computação e TIC* em biociências e saúde",
//         "Criação digital",
//         "Defesa cibernética",
//         "Engenharia de computação (DCN Computação)",
//         "Engenharia de software",
//         "Gestão da tecnologia da informação",
//         "Inteligência artificial",
//         "Internet das coisas",
//         "Jogos digitais",
//         "Programas interdisciplinares abrangendo computação e TIC*",
//         "Redes de computadores",
//         "Segurança da informação",
//         "Sistemas de informação",
//         "Sistemas embarcados",
//         "Sistemas para internet",
//       ],
//       textinfo: "label+percent",
//       insidetextorientation: "radial",
//     },
//   ];

//   // Plotly.newPlot("myDiv", data, layout)

//   return (
//     <div className="container">
//       <Plot
//         data={[
//           {
//             values: data.values,
//             labels: data.labels,
//             type: "pie",
//             textinfo: "label+percent",
//             textposition: "outside",
//             automargin: true,
//           },
//           { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
//         ]}
//         layout={{ width: 700, height: 700, title: "A Fancy Plot" }}
//       />
//       <Plot
//         data={[
//           {
//             x: [1, 2, 3],
//             y: [2, 6, 3],
//             type: "scatter",
//             mode: "lines+markers",
//             marker: { color: "red" },
//           },
//           { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
//         ]}
//         layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
//       />
//     </div>
//   );
// }
// // afternoon-waters-37766.
// export default defaultChart;

// // var data = [{
// //   type: "pie",
// //   values: [2, 3, 4, 4],
// //   labels: ["Wages", "Operating expenses", "Cost of sales", "Insurance"],
// //   textinfo: "label+percent",
// //   textposition: "outside",
// //   automargin: true
// // }]

// // var layout = {
// //   height: 400,
// //   width: 400,
// //   margin: { "t": 0, "b": 0, "l": 0, "r": 0 },
// //   showlegend: false
// // }

// // Plotly.newPlot("myDiv", data, layout)
