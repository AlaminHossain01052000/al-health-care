import { useEffect, useState } from "react";

const useSpecialist = () => {
    const [specialists, setSpecialists] = useState([]);
    useEffect(() => {
        fetch("./specialists.json")
            .then(res => res.json())
            .then(data => setSpecialists(data));
    }, [])
    return {
        specialists
    }
}
export default useSpecialist;