import { useState } from "react";
import { StudentInfo } from "@/types/StudentInfo";
import Card from "./ComponenteCard";

type Props = {
  student: StudentInfo;
};

export default function ComponenteInfo({ student }: Props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="student-container">
      {!showDetails && (
        <h2
          className="student-name"
          onClick={() => setShowDetails(true)}
        >
          {student.name}
        </h2>
      )}

      {showDetails && (
        <div
          className="student-card"
          onClick={() => setShowDetails(false)} // cliccando il card torna al nome
        >
          <Card student={student} />
        </div>
      )}
    </div>
  );
}
