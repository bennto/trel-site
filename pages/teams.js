import { useState, useEffect, useRef } from "react";
import { getDirectusClient } from "../components/lib/directus";
import { Transition } from "react-transition-group";
import Layout from "../components/layout.js";
import styles from "../styles/teams.module.scss";

const Teams = ({ engineer, business }) => {
  const duration = 200;

  const defaultStyles = {
    transition: `all ${duration}ms ease-in-out`,
    maxHeight: 0,
    opacity: 0,
    visibility: `hidden`,
  };
  const transitionStyles = {
    entering: { maxHeight: `300px`, opacity: 1, visibility: `visible` },
    entered: { maxHeight: `300px`, opacity: 1, visibility: `visible` },
    exiting: { maxHeight: 0, opacity: 0, visibility: `hidden` },
    exited: { maxHeight: 0, opacity: 0, visibility: `hidden` },
  };

  return (
    <Layout>
      <div className="p-3 flex-col content-center">
        <div className="mb-20" />
        <h1 className="text-center m-8">Teams</h1>
        <div className="flex flex-row flex-wrap justify-center">
          <div className="">
            <div className="mx-auto w-96 my-2">
              <h5 className="text-center my-1 mt-4">Engineering</h5>
              <hr />
            </div>
            <div className="flex flex-col items-center">
              {engineer.map((team) => {
                const [drop, setDrop] = useState(false);
                return (
                  <Transition in={drop} timeout={duration}>
                    {(state) => (
                      <div
                        className="p-4 m-1 bg-zinc-900 transition-all hover:duration-300 hover:bg-violet-700 cursor-pointer rounded-md w-96 max-w-4xl select-none"
                        onClick={() => {
                          setDrop((v) => !v);
                        }}
                      >
                        <h6 class="text-center">{team.name}</h6>
                        <div
                          className="dropdown text-sm text-zinc-300 mt-1 select-none"
                          style={{
                            ...defaultStyles,
                            ...transitionStyles[state],
                          }}
                          dangerouslySetInnerHTML={{ __html: team.description }}
                        ></div>
                      </div>
                    )}
                  </Transition>
                );
              })}
            </div>
          </div>
          <div className="w-2" />
          <div>
            <div className="mx-auto w-96 my-2">
              <h5 className="text-center my-1 mt-4">Business</h5>
              <hr />
            </div>
            <div className="flex flex-col items-center">
              {business.map((team) => {
                const [dropp, setDropp] = useState(false);
                return (
                  <Transition in={dropp} timeout={duration}>
                    {(state) => (
                      <div
                        className="p-4 m-1 bg-zinc-900 transition-all hover:duration-300 hover:bg-violet-700 cursor-pointer rounded-md w-96 max-w-4xl select-none"
                        onClick={() => {
                          setDropp((v) => !v);
                        }}
                      >
                        <h6 class="text-center">{team.name}</h6>
                        <div
                          className="dropdown text-sm text-zinc-300 mt-1 select-none"
                          style={{
                            ...defaultStyles,
                            ...transitionStyles[state],
                          }}
                          dangerouslySetInnerHTML={{ __html: team.description }}
                        ></div>
                      </div>
                    )}
                  </Transition>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mb-20" />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const directus = await getDirectusClient();
  // GET DATA
  // We don't need to authenticate if the public role has access to some_public_collection.
  let engineer;
  let business;
  try {
    engineer = await directus.items("teams").readByQuery({
      fields: ["*"],
      filter: {
        department: {
          _eq: "engineering",
        },
      },
    });
    business = await directus.items("teams").readByQuery({
      fields: ["*"],
      filter: {
        department: {
          _eq: "business",
        },
      },
    });
  } catch (err) {
    console.log("error");
  }
  engineer = engineer.data;
  business = business.data;
  return {
    props: {
      engineer,
      business,
    },
  };
}

export default Teams;
