import "@component/styles/globals.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

const AddButton = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 60,
        right: 60,
      }}
    >
      <Link href="/addToCatalogue">
        <Fab color="#8bc34a" aria-label="add" sx={{ bgcolor: "#8bc34a" }}>
          <AddIcon />
        </Fab>
      </Link>
    </Box>
  );
};
const PageLayout = ({ children }) => (
  <Box>
    <AddButton />
    {children}
  </Box>
);

export default function App({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
