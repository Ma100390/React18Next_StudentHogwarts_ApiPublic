type Props = {
  image: string;
  house: string;
  wizard: string;
};

export default function ComponenteImmagine(props: Props) {
  return (
    <>
      <p className="card-text">House: {props.house}</p>
      <p className="card-text">Wizard: {props.wizard ? "Yes" : "No"}</p>
    </>
  );
}
