import { Metadata } from "next";

import { getBaseMetadata } from "@helpers/app/metadata";

export const metadata: Metadata = getBaseMetadata({ suffix: "Home" });

export { default } from "./App";
