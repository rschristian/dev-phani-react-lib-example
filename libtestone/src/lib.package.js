import { useEffect, useState } from 'react';

export const Dropdown = (props) => {

    const [dropdown, setDropdown] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        setDropdown(props.jsonData);
    }

    return (
        <div className="dropdown">
            <select> {
                dropdown.map((item, index) => (
                    <option key={index}>
                        {item}</option>
                ))
            } </select>
        </div>
    )

}
