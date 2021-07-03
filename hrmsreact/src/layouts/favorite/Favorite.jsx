import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";

import { Rating } from "semantic-ui-react";
import FavoriteService from "../../services/favoriteService";
import JobSeekerService from "../../services/jobSeekerService";
import { addToFavorite } from "../../store/actions/favoriteAction";

export default function Favorite({ jobAdvert }) {
  const [jobSeeker, setJobSeekers] = useState({});
  let jobSeekerService = new JobSeekerService();
  let favoriteService = new FavoriteService();
  useEffect(() => {
    jobSeekerService
      .getById(1)
      .then((result) => setJobSeekers(result.data.data));
  }, []);

  const dispatch = useDispatch();

  //console.log(jobAdvert);

  let values = {
    jobAdvert: jobAdvert,
    jobSeeker: jobSeeker,
  };

  const handleAddToFavorite = (jobAdvert) => {
    dispatch(addToFavorite(jobAdvert));
    favoriteService.add(values)
    //toast.success("jobAdvert.jobPosition.jobTitle");
    console.log(jobAdvert.jobPosition.jobTitle);
  };
  return (
    <Rating
      onClick={() => handleAddToFavorite(jobAdvert)}
      icon="star"
      defaultRating={0}
      maxRating={1}
    />
  );
}
