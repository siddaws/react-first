import { SyntheticEvent, useState } from "react";
import { toast } from "react-toastify";

export default function SearchForm() {


    const [query, setQuery] = useState('');

    const handleSearch = (e: SyntheticEvent): void => {
        e.preventDefault();

        if (query === '') {
            toast('Please enter a search term');
        } else {
            props.onSearch(query);
        }

    }

    return <>
        <form onSubmit={handleSearch}>
            <div className="row">
                <div className="col-lg-8 ">
                    <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search" />
                </div>
                <div className="col-lg-2">
                    <button type="submit" >Search</button>
                </div>
            </div>
        </form>

    </>
}