
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StudentInfo } from "@/types/StudentInfo";




export default function VisualizzaSpecifiche() {

    const [personaggioS, setpersonaggioS] = useState<StudentInfo>();
    const router = useRouter();
    const IdPersonaggio = router.query.id; 

    useEffect(() => {
        if (IdPersonaggio !== undefined) {
            console.log("Fetching data for ID:", IdPersonaggio);
            axios
                .get(`https://hp-api.onrender.com/api/character/${IdPersonaggio}`)
                .then((response) => {

                    
                    console.log("API response:", response.data); 

                    const characterData = response.data[0]; 
                    setpersonaggioS(characterData);  
                })
                .catch((error) => {
                    console.log("API error:", error); 
                });
        }
    }, [IdPersonaggio]);
    
    
      
    return (
            <>
            <div>
                <h1>Students</h1>
                <div className="card">
                  <h1> {personaggioS?.name}</h1>
                    <h2>{personaggioS?.species}</h2>
                    <h3>{personaggioS?.house}</h3>
                    <h3>{personaggioS?.wizard}</h3>
                    <img src={personaggioS?.image} alt={personaggioS?.name} />
                </div>
            </div>
            </>
    );
}
