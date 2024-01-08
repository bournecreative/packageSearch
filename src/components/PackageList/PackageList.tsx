import { useSelector, useDispatch } from "react-redux";
import { searchRepositories } from "../../state/index";

export const PackageList: React.FC = () => {
  const data = useSelector((state) => state.packages);
  console.log("state", data);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {data.loading && "loading"}
        {data.error && data.error}
        {data.data &&
          data.data.map((item) => {
            return (
              <div key={item.name + item.date}>
                <div>
                  <span>Npm package Name: {item.name}</span>
                  <p>{item.description}</p>
                  <a target="_blank" href={item.links.homepage}>
                    {item.links.homepage}
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
