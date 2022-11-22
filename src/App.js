import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Beginner from "./beginner/Beginner";
import Bin2Dec from "./beginner/Bin2Dec";
import Calculator from "./beginner/Calculator";

import BorderRadiusPreview from "./beginner/BorderRadiusPreview";
import DollaToCents from "./beginner/DollarsToCents";
import CauseEffectApp from "./beginner/CauseEffectApp";

function App() {
    return (
        <div className="md:p-20 sm:p-4 bg-gray-500">
            <BrowserRouter>
                <ul className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 place-content-center ">
                    <li className="text-center shadow-lg block w-full h-full bg-green-50" to="/beginner">
                        <Link to='/beginner'>Beginner</Link>
                    </li>
                    <li className="text-center shadow-lg block w-full h-full bg-orange-100" to="/beginner">
                        <Link to='/intermediate'>Intermediate</Link>
                    </li>
                    <li className="text-center shadow-lg block w-full h-full bg-red-200" to="/beginner">
                        <Link to='/advanced'>Advanced</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path='/beginner' element={<Beginner />} />
                    <Route path='/beginner/bin2dec' element={<Bin2Dec />} />
                    <Route path='/beginner/borderradiuspreview' element={<BorderRadiusPreview />} />
                    <Route path='/beginner/calculator' element={<Calculator />} />
                    <Route path='/beginner/dollarstocents' element={<DollaToCents />} />
                    <Route path='/beginner/causeeffectapp' element={<CauseEffectApp />} />
                    <Route path='/intermediate/*' element={<Beginner />} />
                    <Route path='/advanced/*' element={<Beginner />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
