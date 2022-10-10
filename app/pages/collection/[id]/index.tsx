import { VStack, Image, HStack, Text, Box, SimpleGrid } from "@chakra-ui/react";
import styles from "@styles/Collection.module.css";
import ImageContainer from "@components/ImageContainer";
import { exploreAssets } from "@data/assets";

function Collection() {
  return (
    <VStack className={styles.main}>
      <VStack className={styles.collectionImageContainer}>
        <VStack className={styles.collectionCoverImageContainer}>
          <Image
            alt="cover"
            src="/cover.jpg"
            className={styles.collectionCoverImage}
          ></Image>
        </VStack>
        <Image
          alt="profile"
          src="/fighter.png"
          className={styles.collectionProfileImage}
        ></Image>
      </VStack>
      <VStack className={styles.titleTextContainer}>
        <Text className={styles.title}>Space fighters collection</Text>
        <HStack>
          <Text className={styles.username}>By</Text>
          <Image
            alt="user"
            src="/user.png"
            className={styles.userImage}
          ></Image>
          <Text className={styles.username}>0xfa87...a497</Text>
        </HStack>
        <Text className={styles.subtitle}>
          I am the ruthless NFT collector in neverland
        </Text>
        <HStack className={styles.statsContainer}>
          <HStack>
            <Text className={styles.attribute}>Total volume</Text>
            <Image
              alt="klaytn"
              src="/klaytn.png"
              className={styles.klaytn}
            ></Image>
            <Text className={styles.attributeBold}>
              <Text fontWeight={700} as="span">
                4819
              </Text>{" "}
              ·
            </Text>
          </HStack>
          <HStack>
            <Text className={styles.attribute}>Floor price</Text>
            <Image
              alt="klaytn"
              src="/klaytn.png"
              className={styles.klaytn}
            ></Image>
            <Text>
              <Text fontWeight={700} as="span">
                0.2
              </Text>{" "}
              ·
            </Text>
          </HStack>
          <Text className={styles.attribute}>
            Items{" "}
            <Text fontWeight={700} as="span">
              8.4K
            </Text>{" "}
            · Created{" "}
            <Text fontWeight={700} as="span">
              Feb 2022
            </Text>
          </Text>
        </HStack>
      </VStack>
      <Box className={styles.divider}></Box>
      <HStack className={styles.sectionTitleContainer}>
        <Text className={styles.sectionTitle}>7777 items</Text>
      </HStack>
      <SimpleGrid columns={4} w="100%" gap="1rem">
        {[...exploreAssets, ...exploreAssets].map(
          ({ image, title, subtitle }, idx) => (
            <ImageContainer
              key={idx}
              image={image}
              title={title}
              subtitle={subtitle}
              link="/collection/1/1"
            />
          )
        )}
      </SimpleGrid>
    </VStack>
  );
}

export default Collection;
