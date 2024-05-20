import { type FC } from "react";
import { Playfair_Display } from "next/font/google";

const font = Playfair_Display({ style: ["normal"] });

interface logoProps {}

const logo: FC<logoProps> = ({}) => {
  return <div className={`${font.className} text-2xl`}>Queue</div>;
};

export default logo;
