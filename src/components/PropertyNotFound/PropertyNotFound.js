import image from "../../images/building.png";

export default function PropertyNotFound() {
  return (
    <article className="flex flex-col justify-center items-center">
      <img className="w-32 aspect-square" src={image} alt="building" />
      <h6 className="text-center text-lg font-light">Sorry, it seems there's no property that fulfills the asked conditions.</h6>
    </article>
  );
}
