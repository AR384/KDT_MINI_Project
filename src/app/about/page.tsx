import axios from "axios";
import ButtonCoponent from "./Buttons";

export default async function about() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(res.data)
    return (
        <div>
            <h1>
                <ButtonCoponent/>
            </h1>
        </div>
    );
}
