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
  SimpleGrid,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { exploreAssets, trendingAssets } from "../data/assets";
import ImageContainer from "../components/ImageContainer";

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
              <Link href="/explore">
                <Button className={styles.landingBtn}>Explore</Button>
              </Link>
              <Link href="/create">
                <Button className={styles.landingBtn}>Create</Button>
              </Link>
            </HStack>
          </VStack>
          <ImageContainer
            w="530px"
            image="/fighter.png"
            title="SF Light- Fighter X6"
            subtitle="Floor: 8 KLAY"
            link={`/collection/1`}
          />
        </HStack>
        <VStack w="100%">
          <HStack className={styles.sectionTitleContainer}>
            <Text className={styles.sectionTitle}>Explore</Text>
            <Link href="/explore">
              <Text className={styles.sectionSubtitle} cursor="pointer">
                View more
              </Text>
            </Link>
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
          </HStack>
          <SimpleGrid columns={3} w="100%" gap={2}>
            {[...exploreAssets, ...exploreAssets]
              .slice(0, 6)
              .map(({ image, title, subtitle }, idx) => (
                <ImageContainer
                  key={idx}
                  image={image}
                  title={title}
                  subtitle={subtitle}
                />
              ))}
          </SimpleGrid>
        </VStack>
      </main>
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
