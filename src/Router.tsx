import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PostDetail } from "./pages/PostDetail";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:number" element={<PostDetail />} />
            </Route>    
        </Routes>
    )    
}