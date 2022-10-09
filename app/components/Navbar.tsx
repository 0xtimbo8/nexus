import Link from "next/link";
import styles from "@styles/Navbar.module.css";
import { HStack, Image } from "@chakra-ui/react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

const Navbar = () => {
  const { address } = useAccount();

  return (
    <HStack className={styles.navbar}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          cursor="pointer"
          className={styles.logo}
        ></Image>
      </Link>
      <ConnectKitButton />
    </HStack>
  );
};

export default Navbar;