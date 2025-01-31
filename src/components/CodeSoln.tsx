import { a11yDark, CopyBlock } from "react-code-blocks";
import data from "../data/codeData";
import { useState } from "react";
import CodeButton from "./reusable/CodeButtons";
import Button from "./reusable/Button";
import productData from "../data/productDes";
import { Link } from "react-router-dom";

export default function CodeSoln() {
  const [platform, setPlatform] = useState<number>(0);
  const [channel, setChannel] = useState<number>(0);

  return (
    <div className="rounded-xl w-full py-28 px-16 bg-black flex flex-col justify-center items-center text-center gap-16">
      <div className="text-5xl text-white w-3/4">
        Build flexible workflows with industry leading CPaaS APIs
      </div>
      <div className="flex flex-col gap-2 items-center">
        <CodeButton
          data={["JavaScript", "Rust", "Go"]}
          platform={platform}
          channel={channel}
          setCateogry={setPlatform}
          type={"platform"}
        />
        <CodeButton
          data={["SMS", "WhatsApp"]}
          platform={platform}
          channel={channel}
          setCateogry={setChannel}
          type={"channel"}
        />
      </div>
      <div className="flex justify-between items-center">
        <div
          className="self-start  style={{
        width: '100%',
        flex: 1,
        background: a11yDark.builtInColor,
        paddingBottom: '1em',
      }}"
        >
          <CopyBlock
            text={data[platform].main[channel].code}
            language="javascript"
            showLineNumbers={true}
            theme={a11yDark}
            wrapLongLines
            customStyle={{
              height: "350px",
              width: "600px",
              overflowY: "scroll",
              margin: "0px 0.75rem",
              borderRadius: "5px",
              boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
              fontSize: "0.75rem",
              overflowX: "scroll",
            }}
          />
        </div>
        <div className="text-white flex flex-col gap-8 items-center">
          <h2 className="text-5xl">Code your own solutions</h2>
          <p className="text-lg">
            Integrate your customers’ favorite channels and build experiences
            your customers want, the way you want.{" "}
          </p>
          <div className="flex gap-4">
            <Button text="Explore docs ->" handel={() => {}} variant="VAR2" />
            <Button text="Explore apis ->" handel={() => {}} variant="VAR1" />
          </div>
        </div>
      </div>
      <div className="flex justify-between px-16 gap-12 items-center">
        {productData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-8 text-white text-start"
            >
              <h1 className="text-4xl">{item.heading}</h1>
              <p>{item.des}</p>
              <Link to={item.link}>{item.linkName}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
