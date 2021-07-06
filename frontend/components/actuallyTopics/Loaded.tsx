import React from "react";

import Link from "next/link";
import { Topic } from "../../redux/topics/types";
interface Props {
  topicItems: Array<Topic>;
}

const Loaded: React.FC<Props> = ({ topicItems, ...rest }) => {
  return (
    <>
      <ul
        className="pl-1"
        style={{
          listStyle: "none",
        }}
      >
        {topicItems.map((item) => (
          <>
            <li className="border-top border-bottom mt-2" key={item._id}>
              <Link href="/gegege" key={item._id}>
                <a key={item._id} className="btn m-0 p-0 font-weight-bold">
                  {item.name}
                </a>
              </Link>
              <p key={item._id} className="m-0">
                Твитов: {item.count}
              </p>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};
export default Loaded;
