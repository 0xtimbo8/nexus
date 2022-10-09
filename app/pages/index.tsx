import {
  Button,
  HStack,
  VStack,
  Text,
  Image,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const exploreAssets = [
  {
    image: "/mask.png",
    title: "SF Light- Fighter X6",
    subtitle: "Floor: 8 KLAY",
  },
  {
    image: "/mask.png",
    title: "SF Light- Fighter X6",
    subtitle: "Floor: 8 KLAY",
  },
  {
    image: "/mask.png",
    title: "SF Light- Fighter X6",
    subtitle: "Floor: 8 KLAY",
  },
  {
    image: "/mask.png",
    title: "SF Light- Fighter X6",
    subtitle: "Floor: 8 KLAY",
  },
];

const trendingAssets = [
  {
    image: "/1.png",
    collection: "Space Troopers",
    floor: 3.09,
    volume: 1188,
  },
  {
    image: "/2.png",
    collection: "Space Troopers",
    floor: 3.09,
    volume: 1188,
  },
  {
    image: "/1.png",
    collection: "Space Troopers",
    floor: 3.09,
    volume: 1188,
  },
  {
    image: "/2.png",
    collection: "Space Troopers",
    floor: 3.09,
    volume: 1188,
  },
  {
    image: "/1.png",
    collection: "Space Troopers",
    floor: 3.09,
    volume: 1188,
  },
];

type ImageProps = {
  w?: string;
  h?: string;
  image: string;
  title: string;
  subtitle: string;
};

function ImageContainer({
  w = "100%",
  h = "100%",
  image,
  title,
  subtitle,
}: ImageProps) {
  return (
    <VStack w={w} h={h} className={styles.landingImageContainer}>
      <Image
        alt="image alt"
        src={image}
        className={styles.landingImage}
      ></Image>
      <VStack className={styles.landingImageCaption}>
        <Text className={styles.landingImageCaptionTitle}>{title}</Text>
        <Text className={styles.landingImageCaptionSubtitle}>{subtitle}</Text>
      </VStack>
    </VStack>
  );
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HStack className={styles.landingContainer}>
          <VStack className={styles.landingTextContainer}>
            <Text className={styles.landingTitle}>
              Create, trade, and showcase Metaverse 3D assets
            </Text>
            <Text className={styles.landingSubtitle}>
              Nexus is the world’s first metaverse focused marketplace built on
              the Klaytn blockchain
            </Text>
            <HStack>
              <Button className={styles.landingBtn}>Explore</Button>
              <Button className={styles.landingBtn}>Create</Button>
            </HStack>
          </VStack>
          <ImageContainer
            w="478px"
            h="319px"
            image="/fighter.png"
            title="SF Light- Fighter X6"
            subtitle="Floor: 8 KLAY"
          />
        </HStack>
        <VStack w="100%">
          <HStack className={styles.sectionTitleContainer}>
            <Text className={styles.sectionTitle}>Explore</Text>
            <Text className={styles.sectionSubtitle}>View more</Text>
          </HStack>
          <HStack w="100%">
            {exploreAssets.map(({ image, title, subtitle }, idx) => (
              <ImageContainer
                key={idx}
                image={image}
                title={title}
                subtitle={subtitle}
              />
            ))}
          </HStack>
        </VStack>
        <VStack w="100%">
          <HStack className={styles.sectionTitleContainer}>
            <Text className={styles.sectionTitle}>Trending</Text>
          </HStack>
          <Box className={styles.divider}></Box>
          <HStack>
            {[0, 1].map((id) => (
              <TableContainer key={id}>
                <Table variant="unstyled">
                  <Thead>
                    <Tr className={styles.headerContainer}>
                      <Th className={styles.headerLabel}>#</Th>
                      <Th className={styles.headerLabel}>Collection</Th>
                      <Th className={styles.headerLabel}>Floor Price</Th>
                      <Th className={styles.headerLabel}>Volume</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {trendingAssets.map(
                      (
                        { image, collection, floor, volume }: any,
                        idx: number
                      ) => (
                        <Tr
                          key={idx}
                          onClick={() => {}}
                          className={styles.rowContainer}
                        >
                          <Td className={styles.tableCell}>{idx + 1}</Td>
                          <Td className={styles.tableCollectionCell}>
                            <HStack>
                              <Image alt="hi" src={image}></Image>
                              <Text>{collection}</Text>
                            </HStack>
                          </Td>
                          <Td className={styles.tableCell}>{floor} ETH</Td>
                          <Td className={styles.tableCell}>{volume} ETH</Td>
                        </Tr>
                      )
                    )}
                  </Tbody>
                </Table>
              </TableContainer>
            ))}
          </HStack>
        </VStack>
        <VStack w="100%">
          <HStack className={styles.sectionTitleContainer}>
            <Text className={styles.sectionTitle}>Game spotlight</Text>
            <Text className={styles.sectionSubtitle}>View more</Text>
          </HStack>
          <HStack w="100%">
            {exploreAssets
              .slice(0, 3)
              .map(({ image, title, subtitle }, idx) => (
                <ImageContainer
                  key={idx}
                  image={image}
                  title={title}
                  subtitle={subtitle}
                />
              ))}
          </HStack>
        </VStack>
        <VStack w="100%">
          <HStack className={styles.sectionTitleContainer}>
            <Text className={styles.sectionTitle}>Browse by category</Text>
            <Text className={styles.sectionSubtitle}>View more</Text>
          </HStack>
          <HStack w="100%">
            {exploreAssets
              .slice(0, 3)
              .map(({ image, title, subtitle }, idx) => (
                <ImageContainer
                  key={idx}
                  image={image}
                  title={title}
                  subtitle={subtitle}
                />
              ))}
          </HStack>
          <HStack w="100%">
            {exploreAssets
              .slice(0, 3)
              .map(({ image, title, subtitle }, idx) => (
                <ImageContainer
                  key={idx}
                  image={image}
                  title={title}
                  subtitle={subtitle}
                />
              ))}
          </HStack>
        </VStack>
      </main>
      <HStack className={styles.footer}>
        <Text>@ 2022 Nexus</Text>
      </HStack>
      <Box className={styles.ellipseOverlay}></Box>
      <Image alt="hero" src="/earth.png" className={styles.ellipse}></Image>
      <Box className={styles.heroOverlay1}></Box>
      <Box className={styles.heroOverlay2}></Box>
      <Box className={styles.heroOverlay3}></Box>
      <Image alt="hero" src="/hero.jpg" className={styles.heroImage}></Image>
    </div>
  );
};

export default Home;
