import { Text } from "@chakra-ui/react";
import { WithProvidersProps } from "@common/components";
import { ProjectLayout, WithLayoutProps } from "@layouts/project";
import { NextPageWithLayout } from "@pages/_app";
import { MdxWrapper } from "@ui/layout";

type CSAITemplateProps = WithProvidersProps<
   WithLayoutProps<Record<string, never>>
>;

const CSAITemplate: NextPageWithLayout<CSAITemplateProps> = () => {
   return (
      <MdxWrapper>
         <Text>Content coming soon!</Text>
      </MdxWrapper>
   );
};

CSAITemplate.getLayout = function getLayout(page) {
   return (
      <ProjectLayout
         title="CSAI"
         ghUrl="https://github.com/calpoly-csai"
         // ghColor="linear-gradient(to left top, #814fa0, #01bad7)"
         ghColor="#6d73b0"
      >
         {page}
      </ProjectLayout>
   );
};

export default CSAITemplate;
