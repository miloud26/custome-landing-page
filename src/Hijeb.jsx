import { Box, Divider, Rating, Typography } from "@mui/material";
import Form from "./components/Form";
import { data } from "./data";

function Hijeb() {
  const id = "h";
  const { price, name } = data.filter((item) => item?.id === id)[0];
  return (
    <Box>
      <Box
        sx={{
          padding: "12px",
          backgroundColor: "rgb(135 96 161)",
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
        }}
      >
        مرحبا بكم في متجر جواهر
      </Box>

      <Divider />

      <Box
        padding={"12px 250px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"start"}
        flexWrap={"wrap-reverse"}
        sx={{
          "@media(max-width:1600px)": {
            padding: "12px 180px",
          },
          "@media(max-width:1300px)": {
            padding: "12px 120px",
          },
          "@media(max-width:1100px)": {
            padding: "12px 80px",
          },
          "@media(max-width:900px)": {
            padding: "12px 5px",
          },
        }}
      >
        <Box
          sx={{
            width: "49%",
            padding: "10px",
            backgroundColor: "#eee",
            borderRadius: "12px",
            "@media(max-width:900px)": {
              width: "100%",
            },
          }}
        >
          <Typography
            id="title"
            sx={{
              textAlign: "right",
              fontWeight: "bold",
              fontSize: "29px",
              marginBottom: "8px",
            }}
          >
            {name}
          </Typography>
          <Typography sx={{ marginBottom: "2px", textAlign: "right" }}>
            <Rating value={5} readOnly />
          </Typography>
          <Box display={"flex"} gap={"4px"} justifyContent={"flex-end"}>
            <Typography
              sx={{
                textAlign: "right",
                fontWeight: "bold",
                fontSize: "32px",
                color: "rgb(135 96 161)",
              }}
            >
              دج
            </Typography>
            <Typography
              id="price"
              sx={{
                textAlign: "right",
                fontWeight: "bold",
                fontSize: "32px",
                color: "rgb(135 96 161)",
              }}
            >
              {price}
            </Typography>
          </Box>
          <Form id={id} />
          <Divider />

          <Box marginTop={"50px"}>
            <Box marginTop={"50px"} width={"100%"}>
              <img
                src="https://cdn.shopify.com/s/files/1/0718/9600/6894/files/screencapture-127-0-0-1-5500-index-html-2024-11-03-20_55_24_1_1.webp"
                alt=""
                style={{ margin: "8px 0", width: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "sticky",
            top: "50px",
            width: "49%",
            "@media(max-width:900px)": {
              width: "100%",
              marginBottom: "20px",
              position: "unset",
            },
          }}
        >
          <Box marginBottom={"15px"}>
            <img
              id="mainImg"
              style={{ width: "100%", objectFit: "cover", height: "100%" }}
              src="https://z1n9ew-h0.myshopify.com/cdn/shop/files/2024-11-18-104612_1.webp?v=1732456469&width=823"
              alt="img"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hijeb;
