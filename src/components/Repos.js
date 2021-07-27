import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${params.id}/repos?per_page=5`)
      .then((res) => setRepos(res.data));
  }, [params.id]);

  return (
    <>
      {repos.map((item, index) => (
        <div className="reposLink" key={index}>
          <a href={item.url}>{item.name}</a>
        </div>
      ))}
    </>
  );
};

export default Repos;
