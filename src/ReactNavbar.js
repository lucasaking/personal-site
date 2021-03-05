import React from "react";
import Navbar from "reactjs-navbar";
import { useHistory } from "react-router-dom";
import "./Navigation.css";
import Loader from "react-loader-spinner";
import {
  faUsers,
  faGlobe,
  faCogs,
  faDesktop,
  faGamepad,
  faCloud,
  faWater,
  faCode,
  faFlask,
  faHome,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import "reactjs-navbar/dist/index.css";


function ReactNavbar() {

  // const [loading, setLoading] = useState();

  const history = useHistory();

  return (
    <div className="Navigation">
      <Navbar
        loader={<Loader type="Puff" color="#D85B5B" height={25} width={25} />}
        // isLoading={loading}
        helpCallback={() => {
          alert("Is this site not responsive to your device or are you having technical issues? Email me @lucasking.developer@gmail.com");
        }}
        menuItems={[
          {
            title: "Home",
            icon: faHome,
            isAuth: true,
            onClick: () => {
              history.push("/");
            },
          },
          {
            title: "Contact",
            icon: faUsers,
            isAuth: true,
            onClick: () => {
              history.push("/contact");
            },
          },
          {
            title: "Development",
            icon: faGlobe,
            isAuth: true,
            onClick: () => {
              history.push("/about");
            },
          },
          {
            title: "Portfolio",
            icon: faCode,
            isAuth: true,
            onClick: () => {
              history.push("/full-stack");
            },
            subItems: [
              {
                title: "Full-Stack",
                icon: faCogs,
                isAuth: true,
                onClick: () => {
                  history.push("/full-stack");
                },
              },
              {
                title: "Client",
                icon: faWindowMaximize,
                isAuth: true,
                onClick: () => {
                  history.push("/front-end");
                },
              },
              {
                title: "Server",
                icon: faFlask,
                isAuth: true,
                onClick: () => {
                  history.push("/back-end");
                },
              },
              {
                title: "Games",
                icon: faGamepad,
                isAuth: true,
                onClick: () => {
                  history.push("/web-games");
                },
                subItems: [
                  {
                    title: "Web/Mobile",
                    icon: faCloud,
                    isAuth: true,
                    onClick: () => {
                      history.push("/web-games");
                    },
                  },
                  {
                    title: "Desktop",
                    icon: faDesktop,
                    isAuth: true,
                    onClick: () => {
                      history.push("/games");
                    },
                  },
                ],
              },
              {
                title: "Subitem 3",
                icon: faWater,
                isAuth: () => {
                  return false;
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default ReactNavbar;