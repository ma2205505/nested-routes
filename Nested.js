import { Link, Route, Routes } from "react-router-dom";
import Message from './nestedlinks/Message'
import Feedback from './nestedlinks/Feedback'
import Notification from './nestedlinks/Notification'


function Nested() {
    return (
        <>
            <h1>Nested</h1>

            <div>
                <Link to="Message">Message</Link>
                <Link to="Feedback">Feedback</Link>
                <Link to="Notification">Notification</Link>
            </div>

            <Routes>
                <Route path='Message' element={<Message />} />
                <Route path="Feedback" element={<Feedback />} />
                <Route path="Notification" element={<Notification />} />
            </Routes>

        </>
    );
}
export default Nested;