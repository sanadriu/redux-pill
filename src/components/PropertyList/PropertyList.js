import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTimer from "../../hooks/useTimer";
import { fetchProperties } from "../../redux/properties/actions";
import PropertyItem from "../PropertyItem";
import PropertyNotFound from "../PropertyNotFound";

export default function PropertyList() {
  const filter = useSelector((state) => state.filter);
  const properties = useSelector((state) => state.properties);
  const { runTimer } = useTimer();

  const dispatch = useDispatch();

  const { status, error, result } = properties;

  useEffect(() => {
    runTimer(() => {
      dispatch(fetchProperties(filter));
    }, 1000);
  }, [dispatch, filter, runTimer]);

  return (
    <section className="container mx-auto shadow-md rounded-md p-4 flex flex-col gap-4">
      <div className="grid grid-cols-8 gap-6 text-light text-sm text-gray-500 border-b-gray-200 border-b pb-2">
        <span>Image</span>
        <span className="col-span-2">Address</span>
        <span>Price</span>
        <span className="col-span-2">Characteristics</span>
        <span className="text-center">Mark as sold</span>
        <span className="text-center">Remove</span>
      </div>
      {status === "loading"}
      {status === "success" && (result.length ? result.map((property) => <PropertyItem key={property.id} {...property} />) : <PropertyNotFound />)}
      {status === "error" && <div>{error.message}</div>}
    </section>
  );
}
