import {
   Box,
   Center,
   Heading,
   Link,
   Text,
   useBreakpointValue,
   VStack,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import NextLink from "next/link";

export type ProjectCardProps = {
   src: StaticImageData;
   alt: string;
   title: string;
   caption: string;
   href: string;
   gradientFrom: string;
   gradientTo: string;
};

export function ProjectCard({
   src,
   alt,
   title,
   caption,
   href,
   gradientFrom,
   gradientTo,
}: ProjectCardProps) {
   const h =
      useBreakpointValue({
         base: 225,
         sm: 275,
         md: 300,
         lg: 275,
         xl: 300,
      }) || 300;
   const ratio = src.width / src.height;
   const w = h * ratio;
   return (
      <NextLink href={href} passHref>
         <Link
            isExternal
            _hover={{
               textDecor: "none",
            }}
         >
            <Center>
               <Center
                  w={{
                     base: w + 16,
                     sm: w + 32,
                     md: w + 80,
                     lg: w + 56,
                     xl: w + 80,
                  }}
                  bgGradient={`linear(to-tl, ${gradientFrom}, ${gradientTo})`}
                  py={8}
                  borderRadius="base"
                  _hover={{
                     transform: "translateY(-2px)",
                  }}
                  transitionDuration="200ms"
               >
                  <VStack align="flex-start" gap={4} w={w}>
                     <Box
                        position="relative"
                        w={w}
                        h={h}
                        alignSelf="center"
                        overflow="hidden"
                     >
                        <Image
                           src={src}
                           alt={alt}
                           layout="fill"
                           objectFit="cover"
                        />
                     </Box>
                     <Heading color="white">{title}</Heading>
                     <Text color="white">{caption}</Text>
                  </VStack>
               </Center>
            </Center>
         </Link>
      </NextLink>
   );
}
