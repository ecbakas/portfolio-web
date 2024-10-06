import Image from "next/image";

import memoji from "@/public/memoji.png";
import CopyMail from "./copy-mail";
import HireMe from "./hire-me";
import Title from "./title";
import AvailableBadge from "./available-badge";

export default function Hero() {
  return (
    <div className="p-4">
      <Title title="Frontend Developer" className="xs:flex-row flex flex-col">
        <AvailableBadge withLink={true} />
      </Title>
      <div className="xs:grid-cols-3 xs:grid-rows-1 my-8 grid grid-flow-col grid-cols-1 grid-rows-2 items-center gap-4">
        <div className="xs:row-auto xs:col-span-2 xs:text-left row-start-2 flex flex-col gap-4 text-center">
          <h3 className="text-3xl font-semibold">I&apos;m Ertuğrulcan Bakas</h3>
          <p className="text-muted-foreground">
            Frontend developer from Türkiye.Currently devoloping at
            Ayasofyazılım.
          </p>
          <div className="space-x-2">
            <HireMe />
            <CopyMail />
          </div>
        </div>
        <div className="xs:row-auto xs:col-auto col-start-1 row-start-1 grid place-items-center">
          <div className="relative size-36 overflow-hidden rounded-full ring-8 ring-gray-200/50">
            <Image
              alt="memoji"
              fill
              src={memoji.src}
              className="-rotate-12 scale-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
