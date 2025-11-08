import Card from "@/componets/ComponenteCard";
import { Student } from "@/types/Student";
import axios from "axios";
import { useEffect, useState } from "react";

export default function HomeStudent() {
    const [personaggi, setpersonaggi] = useState<Student[]>(); 
    useEffect(() => {
        axios
            .get("https://hp-api.onrender.com/api/characters/students")
            .then((response) => {
                console.log("API response:", response.data);
                setpersonaggi(response.data);
            })
            .catch((error) => {
                console.log("API error:", error);
                console.log("🚀 ~ file: index.tsx:17 ~ useEffect ~ error:", error)
            });
    }, []);
    

    return (
        <>
            <div>
                <h1>Students</h1>
            </div>
            <div>
                <div className="card">
                    {personaggi?.map( (personaggio) => (<Card student={personaggio} />)  )  }
                    
                </div>
            </div>
        </> 
    );
}
