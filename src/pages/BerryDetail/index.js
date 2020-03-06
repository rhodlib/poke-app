import React, { useEffect } from "react";
import CardContainer from "../../components/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { getItemById } from "../../redux/actions/items";
import { berryItemData, itemIsLoading } from "../../redux/selectors";
import { CircularProgress } from "@material-ui/core";
import BerryDetailComponent from "../../components/BerryDetailComponent";

export const BerryDetail = ({ match }) => {
  const dispatch = useDispatch();
  const berryResult = useSelector(state => berryItemData(state));
  const isLoading = useSelector(state => itemIsLoading(state));

  useEffect(() => {
    const berry = match.params.name;
    dispatch(getItemById(berry));
  }, [dispatch, match]);

  console.log(isLoading);
  
  const renderBerryItemInfo = () => {
    return isLoading === undefined || isLoading ? (
      <CircularProgress size={50} color="primary" />
    ) : (
      <BerryDetailComponent berry={berryResult} />
    );
  };

  return <CardContainer small={true}>{renderBerryItemInfo()}</CardContainer>;
};

export default BerryDetail;
