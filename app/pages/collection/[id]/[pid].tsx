import {
  HStack,
  VStack,
  Text,
  Image,
  SimpleGrid,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import ImageContainer from "@components/ImageContainer";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import styles from "@styles/Asset.module.css";

const details = [
  {
    title: "Contract address",
    subtitle: "0x24e9513e8e7dbf8973dfacf7b5b3b3a7b9a2d2d7",
  },
  {
    title: "Token ID",
    subtitle: 12,
  },
  {
    title: "Blockchain",
    subtitle: "KLAYTN",
  },
  {
    title: "Model",
    subtitle: "",
    link: "/",
  },
  {
    title: "Model",
    subtitle: "",
    link: "/",
  },
  {
    title: "Model",
    subtitle: "",
    link: "/",
  },
];

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  isSell?: boolean;
};

function TradeModal({ isOpen, onClose, isSell }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay className={styles.modalOverlay} />
      <ModalContent className={styles.modalContent}>
        <ModalHeader className={styles.modalHeader}>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <HStack className={styles.modalSubContainer}>
              <Image
                alt="modal"
                src="/fighter.png"
                className={styles.modalImage}
              ></Image>
              <HStack className={styles.modalSubTextContainer}>
                <VStack alignItems="flex-start">
                  <Text className={styles.modalTitle}>
                    SF Light - Fighter x6
                  </Text>
                  <Text className={styles.modalSubtitle}>
                    Space Fighter Collection
                  </Text>
                </VStack>
                <VStack alignItems="flex-end">
                  <Text className={styles.modalTitle}>12.35 KLAY</Text>
                  <Text className={styles.modalSubtitle}>$1827 USD</Text>
                </VStack>
              </HStack>
            </HStack>
            <Box h="1rem"></Box>
            {isSell && (
              <HStack
                w="100%"
                justifyContent="space-between"
                p="0 1rem 2rem 1rem"
              >
                <VStack className={styles.inputContainer}>
                  <Text className={styles.modalTitle}>Price</Text>
                  <VStack className={styles.inputUnitContainer}>
                    <Input className={styles.modalInput}></Input>
                    <Text className={styles.inputUnit}>KLAY</Text>
                  </VStack>
                </VStack>
                <VStack className={styles.inputContainer}>
                  <Text className={styles.modalTitle}>Duration</Text>
                  <VStack className={styles.inputUnitContainer}>
                    <Input className={styles.modalInput}></Input>
                  </VStack>
                </VStack>
              </HStack>
            )}
            <Button className={styles.modalBtn}>
              {isSell ? "Create listing" : "Purchase NFT"}
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function Asset() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack className={styles.main}>
      <TradeModal isOpen={isOpen} onClose={onClose} isSell />
      <ImageContainer image={"/fighter.png"} w="649.38px"></ImageContainer>
      <HStack alignItems="flex-start" gap="1rem" pt="1rem">
        <VStack alignItems="flex-start">
          <Text className={styles.title}>SF Light - Fighter x6</Text>
          <Text className={styles.subtitle}>
            A space fighter is a small spacecraft designed for combat in space.
            They are typically equipped with weapons such as lasers and
            missiles, and are used to protect larger spacecraft or to attack
            enemy targets. Space fighters are agile and maneuverable, and can
            operate in both atmosphere and vacuum.
          </Text>
          <VStack className={styles.minterContainer}>
            <Text className={styles.minterTitle} m={0}>
              Minter
            </Text>
            <HStack>
              <Image
                alt="user"
                src="/user.png"
                className={styles.minterImage}
              ></Image>
              <Text className={styles.minter}>0xfa87...a497</Text>
            </HStack>
          </VStack>
          <VStack gap="1rem">
            <VStack className={styles.sectionContainer}>
              <VStack className={styles.sectionTitleContainer}>
                <Text className={styles.sectionTitle}>History</Text>
              </VStack>
              {[0, 1, 2].map((num) => (
                <HStack w="100%" key={num} pb="1rem">
                  <HStack w="100%">
                    <Image
                      alt="user"
                      src="/user.png"
                      className={styles.historyImage}
                    ></Image>
                    <VStack className={styles.historyRightSection}>
                      <Text m={0}>
                        <Text as="span" className={styles.historyTitle}>
                          0xfa87...a497
                        </Text>{" "}
                        set a new asking price
                      </Text>
                      <Text className={styles.historySubtitle}>
                        Saturday, September 17, 2022 at 08:47:25
                      </Text>
                    </VStack>
                  </HStack>
                  <VStack className={styles.historyLeftSection}>
                    <Text className={styles.historyTitle}>1.24 ETH</Text>
                    <Text className={styles.historySubtitle}>
                      $1,634.83 USD
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
            <VStack className={styles.sectionContainer}>
              <VStack className={styles.sectionTitleContainer}>
                <Text className={styles.sectionTitle}>Properties</Text>
              </VStack>
              <SimpleGrid columns={3} gap="1rem">
                {Array.apply(null, Array(6)).map((num, idx) => (
                  <VStack className={styles.propertyCell} key={idx}>
                    <Text className={styles.propertyTitle}>Background</Text>
                    <Text className={styles.propertySubtitle}>Light Blue</Text>
                  </VStack>
                ))}
              </SimpleGrid>
            </VStack>
            <VStack className={styles.sectionContainer}>
              <VStack className={styles.sectionTitleContainer}>
                <Text className={styles.sectionTitle}>Details</Text>
              </VStack>
              {details.map(({ title, subtitle, link }) => (
                <HStack key={title} className={styles.detailTextContainer}>
                  <Text className={styles.detailTitle}>{title}</Text>
                  {subtitle && (
                    <Text className={styles.detailSubtitle}>{subtitle}</Text>
                  )}
                  {link && <ExternalLinkIcon />}
                </HStack>
              ))}
            </VStack>
          </VStack>
        </VStack>
        <Box pt="1rem">
          <VStack className={styles.priceContainer}>
            <Text className={styles.priceTitle}>Price</Text>
            <Text className={styles.priceTag}>12.35 KLAY</Text>
            <Text className={styles.priceUSD}>$1827 USD</Text>
            <Button className={styles.purchaseBtn} onClick={onOpen}>
              Purchase
            </Button>
          </VStack>
        </Box>
      </HStack>
    </VStack>
  );
}

export default Asset;
