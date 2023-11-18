import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components";

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
            <Navbar />
            <Routes>
                <Route path="/react-youtube-clone" exact element={<Feed />} />
                <Route path="/react-youtube-clone/video/:id" element={<VideoDetail />} />
                <Route path="/react-youtube-clone/channel/:id" element={<ChannelDetail />} />
                <Route path="/react-youtube-clone/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App;
