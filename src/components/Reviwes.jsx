import { Box, Rating, Typography } from "@mui/material";
import React from "react";

const Rev = ({ name, rate, desc }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#dbeafe",
        padding: "16px",
        borderRadius: "16px ",
        marginTop: "16px",
        border: "1px #000 solid",
        width: "45%",
        "@media(max-width:1200px)": {
          width: "100%",
          padding: "8px",
        },
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "22px",
          fontWeight: "bold",
          marginBottom: "15px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        <Rating readOnly value={rate} />
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          fontSize: "21px",
        }}
      >
        {desc}
      </Typography>
    </Box>
  );
};

let reviews = [
  {
    name: "منال عرابي",
    rate: 5,
    desc: "شريته و حاجة شابة بزاف الله يبارك",
  },
  {
    name: "بن علي مروى",
    rate: 5,
    desc: "شوي عريض مي على العموم مشاء الله ",
  },
  {
    name: "مقادر يسؤى",
    rate: 5,
    desc: "شباب الله يبارك و خاصة الاسود",
  },
  {
    name: "MOUNA RLO",
    rate: 5,
    desc: "افضل لون هو اللون الاسود شريتو او مندمتش",
  },
  {
    name: "حجوطي بشرى",
    rate: 5,
    desc: "الزوج تاعي شراهلي كادو خيرات الله عجبني",
  },
  {
    name: "ahlam mourssli",
    rate: 5,
    desc: "ليوم صحاباتي في الخدمة قالولي منين شريتيه هههههه",
  },
];

const Review = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "55px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
          gap: "5px",
        }}
      >
        {reviews.map((item, index) => {
          return <Rev key={index} {...item} />;
        })}
      </Box>
    </>
  );
};

export default Review;
