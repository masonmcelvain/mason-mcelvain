import { FaEnvelope } from "react-icons/fa";
import { BaseIcon } from "./BaseIcon";

export function EnvelopeIcon() {
   return (
      <BaseIcon
         as={FaEnvelope}
         url="mailto:masonmcelvain@gmail.com"
         hoverColor="#f15bb5"
      />
   );
}
