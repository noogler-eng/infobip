import { a11yDark, CopyBlock } from "react-code-blocks";
import data from "../data/codeData";
import { useState } from "react";
import CodeButton from "./reusable/CodeButtons";

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
          setCateogry={setPlatform}
        />
        <CodeButton data={["SMS", "WhatsApp"]} setCateogry={setChannel} />
      </div>
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
            height: "250px",
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
    </div>
  );
}
